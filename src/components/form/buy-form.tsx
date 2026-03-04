"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";

import { DateTimePicker } from "../ui/date-time-picker";

interface FormData {
  mode: string;
  name: string;
  email: string;
  phone: string;
  date: Date | null;
  time: string;
  category: string;
  assistanceType?: string;
  userRole?: string;
}

export default function BuySellForm({ mode }: { mode: string }) {
  const router = useRouter();
  const formRef = React.useRef<HTMLFormElement>(null);

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const isExtendedFlow = mode === "build" || mode === "lease";

  const [formData, setFormData] = React.useState<FormData>({
    mode: mode,
    name: "",
    email: "",
    phone: "",
    date: null,
    time: "",
    category: "",
    assistanceType: "",
    userRole: "",
  });

  const steps =
    mode === "build" || mode === "lease"
      ? [
          { number: 1, title: "Qualification" },
          { number: 2, title: "Contact Info" },
          { number: 3, title: "Schedule Viewing" },
          { number: 4, title: "Property Category" },
        ]
      : [
          { number: 1, title: "Contact Info" },
          { number: 2, title: "Schedule Viewing" },
          { number: 3, title: "Property Category" },
        ];

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    // Remove spaces and non-numeric characters except +
    const cleaned = phone.replace(/[^\d+]/g, "");

    // Must start with + and contain at least 8–15 digits
    const phoneRegex = /^\+\d{8,15}$/;

    return phoneRegex.test(cleaned);
  };

  const handleNext = () => {
    let newErrors: { [key: string]: string } = {};

    // STEP 1
    if (currentStep === 1) {
      if (isExtendedFlow) {
        if (mode === "build" && !formData.assistanceType) {
          newErrors.assistanceType = "Please select assistance type.";
        }

        if (mode === "lease" && !formData.userRole) {
          newErrors.userRole = "Please select your role.";
        }
      } else {
        if (!formData.name.trim()) {
          newErrors.name = "Full name is required.";
        }

        if (!formData.email.trim()) {
          newErrors.email = "Email is required.";
        } else if (!validateEmail(formData.email)) {
          newErrors.email = "Please enter a valid email address.";
        }
      }
    }

    // STEP 2
    if (currentStep === (isExtendedFlow ? 2 : 2)) {
      if (isExtendedFlow) {
        if (!formData.name.trim()) {
          newErrors.name = "Full name is required.";
        }

        if (!formData.email.trim()) {
          newErrors.email = "Email is required.";
        } else if (!validateEmail(formData.email)) {
          newErrors.email = "Please enter a valid email address.";
        }
      } else {
        if (!formData.phone.trim()) {
          newErrors.phone = "Phone number is required.";
        } else if (!validatePhone(formData.phone)) {
          newErrors.phone = "Enter a valid phone number (e.g. +971501234567).";
        }

        if (!formData.date) {
          newErrors.date = "Please select a date.";
        }

        if (!formData.time) {
          newErrors.time = "Please select a time.";
        }
      }
    }

    // STEP 3
    if (currentStep === (isExtendedFlow ? 3 : 3)) {
      if (isExtendedFlow) {
        if (!formData.phone.trim()) {
          newErrors.phone = "Phone number is required.";
        } else if (!validatePhone(formData.phone)) {
          newErrors.phone = "Enter a valid phone number (e.g. +971501234567).";
        }

        if (!formData.date) {
          newErrors.date = "Please select a date.";
        }

        if (!formData.time) {
          newErrors.time = "Please select a time.";
        }
      } else {
        if (!formData.category) {
          newErrors.category = "Please select a category.";
        }
      }
    }

    // STEP 4 (only build / lease)
    if (isExtendedFlow && currentStep === 4) {
      if (!formData.category) {
        newErrors.category = "Please select a category.";
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (currentStep === steps.length) {
        formRef.current?.requestSubmit();
      } else {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    const payload = {
      mode: formData?.mode,
      name: formData?.name,
      email: formData?.email,
      phone: formData?.phone,
      date: formData?.date,
      time: formData?.time,
      category: formData?.category,
    };

    try {
      // const res = await fetch(
      //   "https://hooks.zapier.com/hooks/catch/15977350/uegwy0b/",
      //   {
      //     method: "POST",
      //     mode: "no-cors",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(payload),
      //   },
      // );

      setFormData({
        mode: mode,
        name: "",
        email: "",
        phone: "",
        date: new Date(),
        time: "",
        category: "",
      });

      router.push("/thank-you");
    } catch (error) {
      setFormData({
        mode: mode,
        name: "",
        email: "",
        phone: "",
        date: new Date(),
        time: "",
        category: "",
      });

      console.error(error);
    }
  };

  // React.useEffect(() => {
  //   if (formRef.current) {
  //     formRef.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }
  // }, [currentStep]);

  return (
    <div
      id="form-section"
      className="flex items-center justify-center text-white! px-2 sm:px-6 py-8 sm:py-16"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full "
      >
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className={`mx-auto max-w-2xl space-y-8 px-4 sm:px-6 py-8 sm:py-16 ${
            currentStep === 4 ? " sm:pb-0" : "pb-32 sm:pb-0"
          }`}
          onKeyDown={(e) => {
            if (e.key === "Enter" && currentStep !== steps.length) {
              e.preventDefault();
            }
          }}
        >
          {/* Sticky Header */}
          <div className="sticky top-0 z-50 bg-black/95 backdrop-blur-md  -mx-4 sm:mx-0 px-4 sm:px-0 py-4">
            {/* Step Indicator */}
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.15em] text-muted-foreground font-light">
              <span>Step {currentStep}</span>
              <span className="text-primary">of {steps.length}</span>
            </div>

            {/* Progress Bar */}
            <div className="space-y-3 mt-3">
              <div className="relative h-[1px] bg-white/50">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${(currentStep / steps.length) * 100}%`,
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-0 h-full bg-white shadow-[0_0_20px_rgba(220,160,100,0.3)]"
                />
              </div>

              {/* <h2 className="text-2xl sm:text-3xl font-light tracking-wide text-white">
                {steps[currentStep - 1].title}
              </h2> */}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Step 1: Buying Criteria */}
              {currentStep === 1 && (
                <section className="space-y-6">
                  {isExtendedFlow ? (
                    <>
                      {mode === "build" && (
                        <>
                          <Label className="text-sm font-semibold tracking-wide mb-4 block">
                            Do you need assistance in?
                          </Label>

                          <div className="grid gap-4">
                            {["Development", "Investment", "Consulting"].map(
                              (type) => {
                                const isSelected =
                                  formData.assistanceType === type;

                                return (
                                  <button
                                    key={type}
                                    type="button"
                                    onClick={() =>
                                      setFormData((prev) => ({
                                        ...prev,
                                        assistanceType: type,
                                      }))
                                    }
                                    className={`h-14 uppercase tracking-[0.15em] transition-all ${
                                      isSelected
                                        ? "bg-white text-black ring-2 ring-primary"
                                        : "bg-white/10 hover:bg-white/20"
                                    }`}
                                  >
                                    {type}
                                  </button>
                                );
                              },
                            )}
                          </div>
                          {errors.assistanceType && (
                            <p className="text-red-500 text-sm mt-2">
                              {errors.assistanceType}
                            </p>
                          )}
                        </>
                      )}

                      {mode === "lease" && (
                        <>
                          <Label className="text-sm font-semibold tracking-wide mb-4 block">
                            You are a?
                          </Label>

                          <div className="grid gap-4">
                            {["Tenant", "Landlord"].map((type) => {
                              const isSelected = formData.userRole === type;

                              return (
                                <button
                                  key={type}
                                  type="button"
                                  onClick={() =>
                                    setFormData((prev) => ({
                                      ...prev,
                                      userRole: type,
                                    }))
                                  }
                                  className={`h-14 uppercase tracking-[0.15em] transition-all ${
                                    isSelected
                                      ? "bg-white text-black ring-2 ring-primary"
                                      : "bg-white/10 hover:bg-white/20"
                                  }`}
                                >
                                  {type}
                                </button>
                              );
                            })}
                          </div>
                          {errors.userRole && (
                            <p className="text-red-500 text-sm mt-2">
                              {errors.userRole}
                            </p>
                          )}
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      {/* Normal name/email */}
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold tracking-wide">
                          Full Name
                        </Label>
                        <Input
                          className="h-12 px-4 bg-secondary/50 mt-2"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-semibold tracking-wide">
                          Email Address
                        </Label>
                        <Input
                          type="email"
                          className="h-12 px-4 bg-secondary/50 mt-2"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </>
                  )}
                </section>
              )}
              {/* Step 2: Budget & Timeline */}

              {currentStep === 2 && (
                <section className="space-y-4">
                  {isExtendedFlow ? (
                    <>
                      {/* Name + Email */}
                      <div className="space-y-2">
                        <Label>Full Name</Label>
                        <Input
                          value={formData.name}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm">{errors.name}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label>Email Address</Label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm">{errors.email}</p>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Phone */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="text-sm font-light tracking-wide"
                        >
                          Phone / WhatsApp Number{" "}
                        </Label>
                        <div className="mt-2">
                          <PhoneInput
                            value={formData.phone}
                            onChange={(value) =>
                              setFormData((prev) => ({
                                ...prev,
                                phone: value,
                              }))
                            }
                            placeholder="Enter phone number"
                            required
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-semibold tracking-wide">
                          Preferred Viewing Date & Time
                        </Label>

                        <DateTimePicker.Root
                          date={formData.date}
                          time={formData.time}
                          onDateChange={(value) =>
                            setFormData((prev) => ({ ...prev, date: value }))
                          }
                          onTimeChange={(value) =>
                            setFormData((prev) => ({ ...prev, time: value }))
                          }
                        >
                          <div className="grid grid-cols-2 gap-4">
                            <DateTimePicker.DateTrigger />
                            <DateTimePicker.TimeSelect />
                          </div>
                        </DateTimePicker.Root>

                        {errors.date && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.date}
                          </p>
                        )}
                        {errors.time && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.time}
                          </p>
                        )}
                      </div>
                    </>
                  )}
                </section>
              )}

              {/* Step 3: Contact & Qualification */}
              {currentStep === 3 && (
                <section className="space-y-4">
                  {isExtendedFlow ? (
                    <>
                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="text-sm font-light tracking-wide"
                        >
                          Phone / WhatsApp Number{" "}
                        </Label>
                        <div className="mt-2">
                          <PhoneInput
                            value={formData.phone}
                            onChange={(value) =>
                              setFormData((prev) => ({
                                ...prev,
                                phone: value,
                              }))
                            }
                            placeholder="Enter phone number"
                            required
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-semibold tracking-wide">
                          Preferred Viewing Date & Time
                        </Label>

                        <DateTimePicker.Root
                          date={formData.date}
                          time={formData.time}
                          onDateChange={(value) =>
                            setFormData((prev) => ({ ...prev, date: value }))
                          }
                          onTimeChange={(value) =>
                            setFormData((prev) => ({ ...prev, time: value }))
                          }
                        >
                          <div className="grid grid-cols-2 gap-4">
                            <DateTimePicker.DateTrigger />
                            <DateTimePicker.TimeSelect />
                          </div>
                        </DateTimePicker.Root>

                        {errors.date && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.date}
                          </p>
                        )}
                        {errors.time && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.time}
                          </p>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <Label className="text-sm font-semibold tracking-wide mb-4 block">
                          Select Property Category
                        </Label>

                        <div className="grid grid-cols-2 gap-4">
                          {[
                            "Residential",
                            "Industrial",
                            "Healthcare",
                            "Hospitality",
                            "Education",
                            "Office",
                            "Retail",
                            "Staff",
                          ].map((type) => {
                            const isSelected = formData.category === type;

                            return (
                              <button
                                key={type}
                                type="button"
                                onClick={() =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    category: type,
                                  }))
                                }
                                className={`
                h-14  uppercase tracking-[0.15em]
                transition-all duration-200
                ${
                  isSelected
                    ? "bg-white text-black ring-2 ring-primary font-semibold"
                    : "bg-white/10 text-white hover:bg-white/20"
                }
              `}
                              >
                                {type}
                              </button>
                            );
                          })}
                        </div>

                        {errors.category && (
                          <p className="text-red-500 text-sm mt-2">
                            {errors.category}
                          </p>
                        )}
                      </div>
                    </>
                  )}
                </section>
              )}

              {isExtendedFlow && currentStep === 4 && (
                <section className="space-y-6">
                  <div>
                    <Label className="text-sm font-semibold tracking-wide mb-4 block">
                      Select Property Category
                    </Label>

                    <div className="grid grid-cols-2 gap-4">
                      {[
                        "Residential",
                        "Industrial",
                        "Healthcare",
                        "Hospitality",
                        "Education",
                        "Office",
                        "Retail",
                        "Staff",
                      ].map((type) => {
                        const isSelected = formData.category === type;

                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                category: type,
                              }))
                            }
                            className={`
                h-14  uppercase tracking-[0.15em]
                transition-all duration-200
                ${
                  isSelected
                    ? "bg-white text-black ring-2 ring-primary font-semibold"
                    : "bg-white/10 text-white hover:bg-white/20"
                }
              `}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>

                    {errors.category && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.category}
                      </p>
                    )}
                  </div>
                </section>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <section
            className={` bg-black/95 backdrop-blur-md  border-t border-border/30 px-4 py-4 flex items-center justify-between ${currentStep !== 1 && "gap-4"} sm:static sm:bg-transparent sm:backdrop-blur-0 sm:border-none sm:px-0 sm:py-8`}
          >
            {currentStep > 1 ? (
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                className="px-6 sm:px-10 py-5 sm:py-6 text-xs sm:text-sm uppercase tracking-[0.15em]  border-white text-white hover:border-primary/50 transition-all bg-transparent"
              >
                Back
              </Button>
            ) : (
              <div />
            )}

            {currentStep < steps.length ? (
              <Button
                type="button"
                onClick={handleNext}
                className=" px-6 sm:px-10 py-5 sm:py-6 text-xs sm:text-sm bg-primary hover:bg-primary/90 text-white uppercase tracking-[0.15em] border border-white transition-all hover:scale-105 w-full"
              >
                Continue
              </Button>
            ) : (
              <Button
                type="button"
                onClick={handleNext}
                className="px-6 sm:px-10 py-5 sm:py-6 text-xs sm:text-sm bg-primary hover:bg-primary/90 text-white uppercase tracking-[0.15em] border border-white transition-all hover:scale-105 w-full"
              >
                Submit
              </Button>
            )}
          </section>
        </form>
      </motion.div>
    </div>
  );
}
