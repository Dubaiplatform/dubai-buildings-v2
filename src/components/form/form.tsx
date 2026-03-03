"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MultiSelect } from "@/components/ui/multi-select";
import { PhoneInput } from "@/components/ui/phone-input";
import { Switch } from "@/components/ui/switch";

const AREAS = [
  "Palm Jumeirah",
  "Downtown Dubai",
  "Business Bay",
  "Dubai Marina",
  "Jumeirah Lake Towers (JLT)",
  "Jumeirah Village Circle (JVC)",
  "Jumeirah Village Triangle (JVT)",
  "Meydan / MBR City",
  "Dubai Hills Estate",
  "Dubai Creek Harbour",
  "City Walk",
  "DIFC",
  "Al Barsha",
  "Other",
];

const UNIT_TYPES = [
  "Studio",
  "1 Bedroom Apartment",
  "2 Bedroom Apartment",
  "3+ Bedroom Apartment",
  "Townhouse",
  "Villa",
  "Retail",
  "Office",
  "Bulk / Multiple Units",
];

const INVESTMENT_OBJECTIVES = [
  "Below-market acquisition",
  "Capital appreciation",
  "Rental yield",
  "Short-term flip",
  "Portfolio diversification",
];

interface FormData {
  preferredAreas: string[];
  otherArea: string;
  unitTypes: string[];
  propertyStatus: string;
  budget: string;
  flexibleForDistressed: boolean;
  timeline: string;
  investmentObjectives: string[];
  fullName: string;
  email: string;
  phone: string;
  buyerType: string;
  fundingMethod: string;
  additionalNotes: string;
  consent: boolean;
}

export default function Form() {
  const router = useRouter();
  const formRef = React.useRef<HTMLFormElement>(null);
  const pathname = usePathname();

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [hasStarted, setHasStarted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    preferredAreas: [],
    otherArea: "",
    unitTypes: [],
    propertyStatus: "",
    budget: "",
    flexibleForDistressed: false,
    timeline: "",
    investmentObjectives: [],
    fullName: "",
    email: "",
    phone: "",
    buyerType: "",
    fundingMethod: "",
    additionalNotes: "",
    consent: false,
  });

  const steps = [
    { number: 1, title: "Buying Criteria" },
    { number: 2, title: "Budget & Timeline" },
    { number: 3, title: "Contact Details" },
    { number: 4, title: "Confirmation" },
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

    // STEP 1 VALIDATION
    if (currentStep === 1) {
      if (formData.preferredAreas.length === 0) {
        newErrors.preferredAreas = "Please select at least one area.";
      }

      if (formData.unitTypes.length === 0) {
        newErrors.unitTypes = "Please select at least one unit type.";
      }

      if (!formData.propertyStatus) {
        newErrors.propertyStatus = "Please select asset type.";
      }
    }

    // STEP 2 VALIDATION
    if (currentStep === 2) {
      if (!formData.budget) {
        newErrors.budget = "Please select your budget.";
      }

      if (!formData.timeline) {
        newErrors.timeline = "Please select your buying timeline.";
      }
    }

    // STEP 3 VALIDATION
    if (currentStep === 3) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Full name is required.";
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email is required.";
      } else if (!validateEmail(formData.email)) {
        newErrors.email = "Please enter a valid email address.";
      }

      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required.";
      } else if (!validatePhone(formData.phone)) {
        newErrors.phone = "Enter a valid phone number (e.g. +971501234567).";
      }

      if (!formData.buyerType) {
        newErrors.buyerType = "Please select how you are buying.";
      }
    }

    // STEP 4 VALIDATION
    if (currentStep === 4) {
      if (!formData.fundingMethod) {
        newErrors.fundingMethod = "Please select your funding method.";
      }

      if (!formData.consent) {
        newErrors.consent = "You must confirm before submitting the form.";
      }
    }

    setErrors(newErrors);

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

  const handleAreaToggle = (area: string) => {
    setFormData((prev) => ({
      ...prev,
      preferredAreas: prev.preferredAreas.includes(area)
        ? prev.preferredAreas.filter((a) => a !== area)
        : [...prev.preferredAreas, area],
    }));
  };

  const handleUnitTypeToggle = (unitType: string) => {
    setFormData((prev) => ({
      ...prev,
      unitTypes: prev.unitTypes.includes(unitType)
        ? prev.unitTypes.filter((u) => u !== unitType)
        : [...prev.unitTypes, unitType],
    }));
  };

  const handleObjectiveToggle = (objective: string) => {
    setFormData((prev) => ({
      ...prev,
      investmentObjectives: prev.investmentObjectives.includes(objective)
        ? prev.investmentObjectives.filter((o) => o !== objective)
        : [...prev.investmentObjectives, objective],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    const payload = {
      preferredAreas: formData.preferredAreas,
      otherArea: formData.otherArea,
      unitTypes: formData.unitTypes,
      propertyStatus: formData?.propertyStatus,
      budget: formData?.budget,
      flexibleForDistressed: formData?.flexibleForDistressed,
      timeline: formData?.timeline,
      investmentObjectives: formData?.investmentObjectives,
      fullName: formData?.fullName,
      email: formData?.email,
      phone: formData?.phone,
      buyerType: formData?.buyerType,
      fundingMethod: formData?.fundingMethod,
      additionalNotes: formData?.additionalNotes,
      consent: formData?.consent,
      source: "distresseddealsdubai.com",
    };

    try {
      const res = await fetch(
        "https://hooks.zapier.com/hooks/catch/15977350/uegwy0b/",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      setFormData({
        preferredAreas: [],
        otherArea: "",
        unitTypes: [],
        propertyStatus: "",
        budget: "",
        flexibleForDistressed: false,
        timeline: "",
        investmentObjectives: [],
        fullName: "",
        email: "",
        phone: "",
        buyerType: "",
        fundingMethod: "",
        additionalNotes: "",
        consent: false,
      });

      router.push("/thank-you");
    } catch (error) {
      setFormData({
        preferredAreas: [],
        otherArea: "",
        unitTypes: [],
        propertyStatus: "",
        budget: "",
        flexibleForDistressed: false,
        timeline: "",
        investmentObjectives: [],
        fullName: "",
        email: "",
        phone: "",
        buyerType: "",
        fundingMethod: "",
        additionalNotes: "",
        consent: false,
      });

      console.error(error);
    }
  };

  React.useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentStep]);

  React.useEffect(() => {
    if (hasStarted && formRef.current) {
      setTimeout(() => {
        formRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [hasStarted]);

  const pathValidation = () => {};

  return (
    <div
      id="form-section"
      className="flex items-center justify-center text-white! px-2 sm:px-6 py-8 sm:py-16"
    >
      {!hasStarted ? (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-10 max-w-xl px-4"
        >
          <Button
            onClick={() => setHasStarted(true)}
            className="px-12 py-7 text-sm sm:text-base bg-white hover:bg-primary/90 text-black border-none uppercase tracking-[0.2em] font-light transition-all duration-300 hover:scale-105"
          >
            Begin Registration
          </Button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full min-h-screen"
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
            <div className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-border/30 -mx-4 sm:mx-0 px-4 sm:px-0 py-4">
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

                <h2 className="text-2xl sm:text-3xl font-light tracking-wide text-white">
                  {steps[currentStep - 1].title}
                </h2>
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
                  <section className="space-y-4">
                    {/* Preferred Areas */}
                    <div className="space-y-4">
                      <Label className="text-sm sm:text-base font-semibol tracking-wide">
                        Which areas are you actively considering?
                      </Label>
                      <div className="mt-2">
                        <MultiSelect
                          options={AREAS}
                          searchBoolen={true}
                          selected={formData.preferredAreas}
                          onChange={(selected) =>
                            setFormData((prev) => ({
                              ...prev,
                              preferredAreas: selected,
                            }))
                          }
                          placeholder="Select one or more areas"
                        />
                      </div>
                      {formData.preferredAreas.includes("Other") && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Input
                            placeholder="Please specify other area"
                            value={formData.otherArea}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                otherArea: e.target.value,
                              }))
                            }
                            className="mt-4 h-12 px-4 bg-secondary/50 border-border/50  transition-colors"
                          />
                        </motion.div>
                      )}

                      {errors.preferredAreas && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.preferredAreas}
                        </p>
                      )}
                    </div>

                    {/* Unit Type */}
                    <div className="space-y-4">
                      <Label className="text-sm sm:text-base font-semibold tracking-wide">
                        What type of property are you looking to buy?
                      </Label>
                      <div className="mt-2">
                        <MultiSelect
                          options={UNIT_TYPES}
                          selected={formData.unitTypes}
                          onChange={(selected) =>
                            setFormData((prev) => ({
                              ...prev,
                              unitTypes: selected,
                            }))
                          }
                          placeholder="Select one or more property types"
                        />
                      </div>
                      {errors.unitTypes && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.unitTypes}
                        </p>
                      )}
                    </div>

                    {/* Property Status */}
                    <div className="space-y-4">
                      <Label className="text-sm sm:text-base font-semibold tracking-wide">
                        Preferred asset type
                      </Label>
                      <RadioGroup
                        value={formData.propertyStatus}
                        onValueChange={(value) =>
                          setFormData((prev) => ({
                            ...prev,
                            propertyStatus: value,
                          }))
                        }
                        className="space-y-2 mt-2"
                      >
                        <div className="flex items-center gap-3 p-4  border border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
                          <RadioGroupItem value="completed" id="completed" />
                          <label
                            htmlFor="completed"
                            className="cursor-pointer text-sm sm:text-base font-light flex-1"
                          >
                            Completed / Ready
                          </label>
                        </div>
                        <div className="flex items-center gap-3 p-4  border border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
                          <RadioGroupItem value="off-plan" id="off-plan" />
                          <label
                            htmlFor="off-plan"
                            className="cursor-pointer text-sm sm:text-base font-light flex-1"
                          >
                            Off-Plan
                          </label>
                        </div>
                        <div className="flex items-center gap-3 p-4  border border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
                          <RadioGroupItem value="either" id="either" />
                          <label
                            htmlFor="either"
                            className="cursor-pointer text-sm sm:text-base font-light flex-1"
                          >
                            Either (opportunity-driven)
                          </label>
                        </div>
                      </RadioGroup>
                      {errors.propertyStatus && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.propertyStatus}
                        </p>
                      )}
                    </div>
                  </section>
                )}

                {/* Step 2: Budget & Timeline */}
                {currentStep === 2 && (
                  <section className="space-y-4">
                    {/* Budget */}
                    <div className="space-y-4">
                      <Label
                        htmlFor="budget"
                        className="text-sm sm:text-base font-semibold tracking-wide"
                      >
                        Target purchase budget (AED)
                      </Label>
                      <div className="mt-2">
                        <Select
                          value={formData.budget}
                          onValueChange={(value) =>
                            setFormData((prev) => ({ ...prev, budget: value }))
                          }
                        >
                          <SelectTrigger
                            id="budget"
                            className="h-12 px-4 bg-black border-border/50"
                          >
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent className="bg-black text-white border-border/50">
                            <SelectItem value="under-1m">
                              Under AED 1,000,000
                            </SelectItem>
                            <SelectItem value="1m-1.5m">
                              AED 1,000,000 – 1,500,000
                            </SelectItem>
                            <SelectItem value="1.5m-2.5m">
                              AED 1,500,000 – 2,500,000
                            </SelectItem>
                            <SelectItem value="2.5m-5m">
                              AED 2,500,000 – 5,000,000
                            </SelectItem>
                            <SelectItem value="5m-10m">
                              AED 5,000,000 – 10,000,000
                            </SelectItem>
                            <SelectItem value="10m+">
                              AED 10,000,000+
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center justify-between gap-4   hover:border-primary/50 transition-colors">
                        <Switch
                          id="flexible"
                          checked={formData.flexibleForDistressed}
                          onCheckedChange={(checked) =>
                            setFormData((prev) => ({
                              ...prev,
                              flexibleForDistressed: checked,
                            }))
                          }
                        />
                        <label
                          htmlFor="flexible"
                          className="cursor-pointer text-sm sm:text-base font-light flex-1"
                        >
                          Flexible for the right distressed deal
                        </label>
                      </div>
                      {errors.budget && (
                        <p className="text-red-500 text-sm mt-">
                          {errors.budget}
                        </p>
                      )}
                    </div>

                    {/* Timeline */}
                    <div className="space-y-4">
                      <Label
                        htmlFor="timeline"
                        className="text-sm sm:text-base font-semibold tracking-wide"
                      >
                        How soon are you looking to buy?
                      </Label>
                      <div className="mt-2">
                        <Select
                          value={formData.timeline}
                          onValueChange={(value) =>
                            setFormData((prev) => ({
                              ...prev,
                              timeline: value,
                            }))
                          }
                        >
                          <SelectTrigger
                            id="timeline"
                            className="h-12 px-4 bg-secondary/50 border-border/50"
                          >
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent className="bg-black border-border/50">
                            <SelectItem value="immediate">
                              Immediate (0–30 days)
                            </SelectItem>
                            <SelectItem value="short-term">
                              Short term (1–3 months)
                            </SelectItem>
                            <SelectItem value="medium-term">
                              Medium term (3–6 months)
                            </SelectItem>
                            <SelectItem value="opportunistic">
                              Opportunistic (right deal only)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Investment Objectives */}
                    <div className="space-y-4">
                      <Label className="text-sm sm:text-base font-semibold tracking-wide">
                        Primary objective (select all that apply)
                      </Label>
                      <div className="mt-2">
                        <MultiSelect
                          options={INVESTMENT_OBJECTIVES}
                          selected={formData.investmentObjectives}
                          onChange={(selected) =>
                            setFormData((prev) => ({
                              ...prev,
                              investmentObjectives: selected,
                            }))
                          }
                          placeholder="Select one or more objectives"
                        />
                      </div>

                      {errors.timeline && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.timeline}
                        </p>
                      )}
                    </div>
                  </section>
                )}

                {/* Step 3: Contact & Qualification */}
                {currentStep === 3 && (
                  <section className="space-y-4">
                    <>
                      {/* Full Name */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="fullName"
                          className="text-sm font-semibold tracking-wide"
                        >
                          Full Name
                        </Label>
                        <Input
                          className="h-12 px-4 bg-secondary/50 border-border/50 transition-colors mt-2"
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              fullName: e.target.value,
                            }))
                          }
                        />
                        {errors.fullName && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-sm font-semibold tracking-wide"
                        >
                          Email Address
                        </Label>
                        <Input
                          className="h-12 px-4 bg-secondary/50 border-border/50  transition-colors mt-2"
                          id="email"
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
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>

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

                      {/* Buyer Type */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="buyerType"
                          className="text-sm font-semibold tracking-wide mt-2"
                        >
                          You are buying as
                        </Label>
                        <div className="mt-2">
                          <Select
                            value={formData.buyerType}
                            onValueChange={(value) =>
                              setFormData((prev) => ({
                                ...prev,
                                buyerType: value,
                              }))
                            }
                          >
                            <SelectTrigger
                              id="buyerType"
                              className="h-12 px-4 bg-black border-border/50"
                            >
                              <SelectValue placeholder="Select buyer type" />
                            </SelectTrigger>
                            <SelectContent className="bg-black border-border/50">
                              <SelectItem value="individual">
                                Individual
                              </SelectItem>
                              <SelectItem value="company">Company</SelectItem>
                              <SelectItem value="family-office">
                                Family Office
                              </SelectItem>
                              <SelectItem value="investment-fund">
                                Investment Fund
                              </SelectItem>
                            </SelectContent>
                          </Select>

                          {errors.buyerType && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.buyerType}
                            </p>
                          )}
                        </div>
                      </div>
                    </>
                  </section>
                )}

                {currentStep === 4 && (
                  <section className="space-y-4">
                    {/* Funding Method */}
                    <div className="space-y-4">
                      <Label className="text-sm sm:text-base font-semibold tracking-wide">
                        Intended funding method
                      </Label>
                      <RadioGroup
                        value={formData.fundingMethod}
                        onValueChange={(value) =>
                          setFormData((prev) => ({
                            ...prev,
                            fundingMethod: value,
                          }))
                        }
                        className="mt-2"
                      >
                        <div className="flex items-center gap-3 p-4  border border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
                          <RadioGroupItem value="cash" id="cash" />
                          <label
                            htmlFor="cash"
                            className="cursor-pointer text-sm sm:text-base font-light flex-1"
                          >
                            Cash
                          </label>
                        </div>

                        <div className="flex items-center gap-3 p-4  border border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
                          <RadioGroupItem value="mortgage" id="mortgage" />
                          <label
                            htmlFor="mortgage"
                            className="cursor-pointer text-sm sm:text-base font-light flex-1"
                          >
                            Mortgage
                          </label>
                        </div>

                        <div className="flex items-center gap-3 p-4  border border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
                          <RadioGroupItem value="mix" id="mix" />
                          <label
                            htmlFor="mix"
                            className="cursor-pointer text-sm sm:text-base font-light flex-1"
                          >
                            Mix of cash & finance
                          </label>
                        </div>
                      </RadioGroup>

                      {errors.fundingMethod && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.fundingMethod}
                        </p>
                      )}
                    </div>

                    {/* Additional Notes */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="notes"
                        className="text-sm sm:text-base font-semibold tracking-wide"
                      >
                        Anything specific we should know?
                      </Label>
                      <Textarea
                        id="notes"
                        className="min-h-[120px] px-4 py-3 bg-secondary/50 border-border/50  transition-colors resize-none mt-2"
                        rows={4}
                        value={formData.additionalNotes}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            additionalNotes: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </section>
                )}
              </motion.div>
            </AnimatePresence>

            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="md:p-6 bg-secondary/20"
              >
                <div className="flex items-start gap-4">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({
                        ...prev,
                        consent: checked as boolean,
                      }))
                    }
                    className="mt-1"
                  />
                  <label
                    htmlFor="consent"
                    className="cursor-pointer text-sm sm:text-base leading-relaxed font-light flex-1"
                  >
                    I understand that distressed opportunities are shared
                    selectively and subject to availability.
                  </label>
                </div>
                {errors.consent && (
                  <p className="text-red-500 text-sm mt-1">{errors.consent}</p>
                )}
              </motion.div>
            )}

            {/* Navigation */}
            <section
              className={`fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-md  border-t border-border/30 px-4 py-4 flex items-center justify-between ${currentStep !== 1 && "gap-4"} sm:static sm:bg-transparent sm:backdrop-blur-0 sm:border-none sm:px-0 sm:py-8`}
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
      )}
    </div>
  );
}
