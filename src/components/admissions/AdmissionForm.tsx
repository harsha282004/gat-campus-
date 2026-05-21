"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { GlassCard } from "@/components/ui/GlassCard";
import { useToast } from "@/components/ui/use-toast";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  course: z.string().min(1),
  percentage: z.string().min(1),
});

type FormData = z.infer<typeof schema>;

export function AdmissionForm() {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = () => {
    toast({ title: "Application Submitted!", description: "We'll contact you within 48 hours." });
  };

  return (
    <GlassCard>
      <Progress value={(step / 3) * 100} className="mb-6" />
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Personal Details</h3>
            <div><Label>Name</Label><Input {...register("name")} className="mt-1 glass" />{errors.name && <p className="text-xs text-red-400">{errors.name.message}</p>}</div>
            <div><Label>Email</Label><Input {...register("email")} className="mt-1 glass" /></div>
            <div><Label>Phone</Label><Input {...register("phone")} className="mt-1 glass" /></div>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Academic Details</h3>
            <div><Label>Preferred Course</Label><Input {...register("course")} placeholder="B.Tech CSE" className="mt-1 glass" /></div>
            <div><Label>12th Percentage</Label><Input {...register("percentage")} className="mt-1 glass" /></div>
          </div>
        )}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Documents</h3>
            <Input type="file" className="glass" aria-label="Upload documents" />
            <p className="text-sm text-[#8899bb]">Upload 10th, 12th marksheets and ID proof</p>
          </div>
        )}
        <div className="mt-6 flex gap-2">
          {step > 1 && <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>Back</Button>}
          {step < 3 ? (
            <Button type="button" onClick={() => setStep(step + 1)} className="bg-gold-gradient text-navy-950">Next</Button>
          ) : (
            <Button type="submit" className="bg-gold-gradient text-navy-950">Submit Application</Button>
          )}
        </div>
      </form>
    </GlassCard>
  );
}
