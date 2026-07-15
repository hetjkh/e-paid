"use client";

import { useRef, useState } from "react";
import CountryCodeSelect from "@/app/components/CountryCodeSelect";
import Header from "@/app/components/Header";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import {
  formInputClassName,
} from "@/app/components/form-styles";
import { cn } from "@/lib/utils";

const steps = [
  "Business Information",
  "Store Details",
  "KYC",
  "Payment Details",
] as const;

const formRowClassName =
  "grid grid-cols-1 gap-4 min-[520px]:grid-cols-2 min-[520px]:gap-5";

const selectClassName = `${formInputClassName} appearance-none`;

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="pointer-events-none absolute -top-2.5 left-3 z-10 bg-card px-1 text-[10px] leading-none text-muted-foreground sm:left-5 sm:text-xs">
      {children}
    </span>
  );
}

function TextField({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="relative block min-w-0">
      <FieldLabel>{label}</FieldLabel>
      <input
        type={type}
        name={name}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(event) => onChange(name, event.target.value)}
        className={formInputClassName}
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  required,
  placeholder = "Select option",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  options: string[];
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="relative block min-w-0">
      <FieldLabel>{label}</FieldLabel>
      <select
        name={name}
        value={value}
        required={required}
        onChange={(event) => onChange(name, event.target.value)}
        className={selectClassName}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function NextButton({
  label,
  onClick,
  type = "button",
}: {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-black py-1 pl-6 pr-1.5 text-sm font-semibold uppercase leading-none tracking-wide text-white transition-opacity hover:opacity-90 sm:h-[52px] sm:pl-7 sm:pr-2 sm:text-base"
    >
      <span className="whitespace-nowrap">{label}</span>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-black sm:h-10 sm:w-10">
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}

const initialFormState = {
  businessName: "",
  businessType: "",
  crNumber: "",
  vatNumber: "",
  ownerName: "",
  ownerEmail: "",
  ownerPhone: "",
  storeName: "",
  workingHours: "",
  address: "",
  postalCode: "",
  companyUrl: "",
  storeEmail: "",
  dailyCustomers: "",
  storePhone: "",
  nationalId: "",
  signatoryName: "",
  dateOfBirth: "",
  countryOfRegistration: "",
  bankName: "",
  accountHolder: "",
  iban: "",
  swiftCode: "",
  settlementCycle: "",
  posQuantity: "",
  paymentMethods: "",
};

export default function OnboardingForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(initialFormState);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const updateField = (name: string, value: string) => {
    setForm((current) => ({ ...current, [name]: value }));
  };

  const validateCurrentStep = () => {
    const currentStep = stepRefs.current[step];
    if (!currentStep) return true;

    const fields = currentStep.querySelectorAll<HTMLInputElement | HTMLSelectElement>(
      "input, select"
    );

    for (const field of fields) {
      if (!field.checkValidity()) {
        field.reportValidity();
        return false;
      }
    }

    return true;
  };

  const handleNext = () => {
    if (!validateCurrentStep()) return;
    setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const handleBack = () => {
    setStep((current) => Math.max(current - 1, 0));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateCurrentStep()) return;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Header variant="page" />

      <section className="relative overflow-hidden bg-gradient-to-r from-[#e6f3fa] via-background to-[#fef8eb] pb-16 pt-8 dark:from-[#0f1a2e] dark:via-background dark:to-[#1a1408] sm:pb-20 sm:pt-10 lg:pb-24">
        <div className="pointer-events-none absolute -left-16 top-0 h-56 w-56 rounded-full bg-epaid/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-1/3 h-56 w-56 rounded-full bg-epaid-yellow/20 blur-3xl" />

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <h1 className="text-center text-4xl font-bold uppercase text-epaid sm:text-5xl lg:text-6xl">
            Store Onboarding
          </h1>

          <div className="mt-8 overflow-x-auto pb-2">
            <div className="relative min-w-[720px]">
              <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-epaid/35" />
              <ol className="relative flex items-center justify-between gap-3">
                {steps.map((label, index) => {
                  const isActive = index === step;
                  const isComplete = index < step;

                  return (
                    <li key={label} className="flex flex-1 justify-center">
                      <button
                        type="button"
                        onClick={() => setStep(index)}
                        className={cn(
                          "relative z-10 rounded-full border px-4 py-2.5 text-center text-[11px] font-semibold uppercase leading-tight tracking-wide transition-colors sm:px-5 sm:text-xs lg:px-6 lg:text-sm",
                          isActive
                            ? "border-epaid bg-epaid text-white"
                            : isComplete
                              ? "border-epaid bg-card text-epaid"
                              : "border-[#000000] bg-card text-foreground dark:border-white"
                        )}
                      >
                        {label}
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          {submitted ? (
            <div className="mt-10 rounded-[24px] border border-border-soft bg-card p-8 text-center sm:p-10">
              <p className="text-xl font-bold text-epaid sm:text-2xl">
                Application submitted successfully!
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Thank you for onboarding with ePaid. Our team will review your
                details and contact you within 2 business days.
              </p>
            </div>
          ) : (
            <form className="mt-10" onSubmit={handleSubmit}>
              {step === 0 ? (
                <div
                  ref={(element) => {
                    stepRefs.current[0] = element;
                  }}
                  className={formRowClassName}
                >
                  <TextField
                    label="Business / Legal Name (mandatory)"
                    name="businessName"
                    value={form.businessName}
                    onChange={updateField}
                    placeholder="Enter legal business name"
                    required
                  />
                  <SelectField
                    label="Business Type (mandatory)"
                    name="businessType"
                    value={form.businessType}
                    onChange={updateField}
                    options={[
                      "Retail",
                      "Supermarket",
                      "Restaurant",
                      "Hotel",
                      "Pharmacy",
                      "Services",
                      "Other",
                    ]}
                    required
                  />
                  <TextField
                    label="CR Number (mandatory)"
                    name="crNumber"
                    value={form.crNumber}
                    onChange={updateField}
                    placeholder="Commercial registration number"
                    required
                  />
                  <TextField
                    label="VAT Number (Optional)"
                    name="vatNumber"
                    value={form.vatNumber}
                    onChange={updateField}
                    placeholder="Enter VAT number"
                  />
                  <TextField
                    label="Owner Full Name (mandatory)"
                    name="ownerName"
                    value={form.ownerName}
                    onChange={updateField}
                    placeholder="Enter owner name"
                    required
                  />
                  <TextField
                    label="Owner Email (mandatory)"
                    name="ownerEmail"
                    type="email"
                    value={form.ownerEmail}
                    onChange={updateField}
                    placeholder="owner@business.com"
                    required
                  />
                  <TextField
                    label="Owner Contact Number (mandatory)"
                    name="ownerPhone"
                    type="tel"
                    value={form.ownerPhone}
                    onChange={updateField}
                    placeholder="+966 000000000"
                    required
                  />
                </div>
              ) : null}

              {step === 1 ? (
                <div
                  ref={(element) => {
                    stepRefs.current[1] = element;
                  }}
                  className="space-y-4 min-[520px]:space-y-5"
                >
                  <div className={formRowClassName}>
                    <TextField
                      label="Store name (mandatory)"
                      name="storeName"
                      value={form.storeName}
                      onChange={updateField}
                      placeholder="Satocci store"
                      required
                    />
                    <TextField
                      label="Working Hours (mandatory)"
                      name="workingHours"
                      value={form.workingHours}
                      onChange={updateField}
                      placeholder="9AM to 8PM - Monday to Friday"
                      required
                    />
                    <TextField
                      label="Address (Optional)"
                      name="address"
                      value={form.address}
                      onChange={updateField}
                      placeholder="Dubai, UAE"
                    />
                    <TextField
                      label="Postal Code (mandatory)"
                      name="postalCode"
                      value={form.postalCode}
                      onChange={updateField}
                      placeholder="Enter postal code"
                      required
                    />
                    <TextField
                      label="Company URL (Optional)"
                      name="companyUrl"
                      value={form.companyUrl}
                      onChange={updateField}
                      placeholder="Satocci.com"
                    />
                    <TextField
                      label="Store Email (mandatory)"
                      name="storeEmail"
                      type="email"
                      value={form.storeEmail}
                      onChange={updateField}
                      placeholder="hello@Satocci.com"
                      required
                    />
                    <TextField
                      label="Range of daily customers (Optional)"
                      name="dailyCustomers"
                      value={form.dailyCustomers}
                      onChange={updateField}
                      placeholder="5,000-10,000"
                    />
                  </div>

                  <div className="flex flex-col gap-4 min-[520px]:flex-row min-[520px]:items-start min-[520px]:gap-5">
                    <label className="relative z-10 w-[7.25rem] shrink-0 overflow-visible sm:w-[7.75rem]">
                      <FieldLabel>Code</FieldLabel>
                      <CountryCodeSelect
                        defaultDialCode="+966"
                        className="w-full"
                      />
                    </label>
                    <TextField
                      label="Store Contact Number (mandatory)"
                      name="storePhone"
                      type="tel"
                      value={form.storePhone}
                      onChange={updateField}
                      placeholder="000000000"
                      required
                    />
                  </div>
                </div>
              ) : null}

              {step === 2 ? (
                <div
                  ref={(element) => {
                    stepRefs.current[2] = element;
                  }}
                  className={formRowClassName}
                >
                  <TextField
                    label="National ID / Iqama (mandatory)"
                    name="nationalId"
                    value={form.nationalId}
                    onChange={updateField}
                    placeholder="Enter ID number"
                    required
                  />
                  <TextField
                    label="Authorized Signatory (mandatory)"
                    name="signatoryName"
                    value={form.signatoryName}
                    onChange={updateField}
                    placeholder="Full name of signatory"
                    required
                  />
                  <TextField
                    label="Date of Birth (mandatory)"
                    name="dateOfBirth"
                    type="date"
                    value={form.dateOfBirth}
                    onChange={updateField}
                    required
                  />
                  <TextField
                    label="Country of Registration (mandatory)"
                    name="countryOfRegistration"
                    value={form.countryOfRegistration}
                    onChange={updateField}
                    placeholder="Saudi Arabia"
                    required
                  />
                  <label className="relative block min-w-0">
                    <FieldLabel>ID Document (Optional)</FieldLabel>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className={`${formInputClassName} file:mr-3 file:rounded-full file:border-0 file:bg-epaid file:px-3 file:py-1 file:text-xs file:font-semibold file:text-white`}
                    />
                  </label>
                  <label className="relative block min-w-0">
                    <FieldLabel>Business License (Optional)</FieldLabel>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className={`${formInputClassName} file:mr-3 file:rounded-full file:border-0 file:bg-epaid file:px-3 file:py-1 file:text-xs file:font-semibold file:text-white`}
                    />
                  </label>
                </div>
              ) : null}

              {step === 3 ? (
                <div
                  ref={(element) => {
                    stepRefs.current[3] = element;
                  }}
                  className={formRowClassName}
                >
                  <TextField
                    label="Bank Name (mandatory)"
                    name="bankName"
                    value={form.bankName}
                    onChange={updateField}
                    placeholder="Enter bank name"
                    required
                  />
                  <TextField
                    label="Account Holder Name (mandatory)"
                    name="accountHolder"
                    value={form.accountHolder}
                    onChange={updateField}
                    placeholder="Name on bank account"
                    required
                  />
                  <TextField
                    label="IBAN (mandatory)"
                    name="iban"
                    value={form.iban}
                    onChange={updateField}
                    placeholder="SA00 0000 0000 0000 0000 0000"
                    required
                  />
                  <TextField
                    label="SWIFT / BIC (Optional)"
                    name="swiftCode"
                    value={form.swiftCode}
                    onChange={updateField}
                    placeholder="Enter SWIFT code"
                  />
                  <SelectField
                    label="Settlement Cycle (mandatory)"
                    name="settlementCycle"
                    value={form.settlementCycle}
                    onChange={updateField}
                    options={["Daily", "Weekly", "Bi-weekly", "Monthly"]}
                    required
                  />
                  <TextField
                    label="POS Device Quantity (mandatory)"
                    name="posQuantity"
                    type="number"
                    value={form.posQuantity}
                    onChange={updateField}
                    placeholder="e.g. 3"
                    required
                  />
                  <SelectField
                    label="Payment Methods (mandatory)"
                    name="paymentMethods"
                    value={form.paymentMethods}
                    onChange={updateField}
                    options={[
                      "Card only",
                      "Card + NFC",
                      "Card + NFC + QR",
                      "All methods",
                    ]}
                    required
                  />
                </div>
              ) : null}

              <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="text-sm font-semibold uppercase text-muted-foreground transition-colors hover:text-epaid"
                  >
                    ← Back
                  </button>
                ) : null}

                {step < steps.length - 1 ? (
                  <NextButton label="Next" onClick={handleNext} />
                ) : (
                  <NextButton label="Submit" type="submit" />
                )}
              </div>
            </form>
          )}
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}
