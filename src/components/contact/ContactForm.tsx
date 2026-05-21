"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GlassCard } from "@/components/ui/GlassCard";
import { useToast } from "@/components/ui/use-toast";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  department: z.string().min(1, "Select department"),
  message: z.string().min(10, "Message too short"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const { toast } = useToast();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = () => {
    toast({ title: "Message Sent!", description: "We'll respond within 24 hours." });
  };

  return (
    <GlassCard>
      <h3 className="mb-6 text-xl font-semibold text-white">Send a Message</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label>Name</Label>
          <Input {...register("name")} className="mt-1 glass border-white/10" />
          {errors.name && <p className="text-xs text-red-400">{errors.name.message}</p>}
        </div>
        <div>
          <Label>Email</Label>
          <Input {...register("email")} type="email" className="mt-1 glass border-white/10" />
          {errors.email && <p className="text-xs text-red-400">{errors.email.message}</p>}
        </div>
        <div>
          <Label>Phone</Label>
          <Input {...register("phone")} className="mt-1 glass border-white/10" />
        </div>
        <div>
          <Label>Department</Label>
          <Select onValueChange={(v) => setValue("department", v)}>
            <SelectTrigger className="mt-1 glass border-white/10"><SelectValue placeholder="Select" /></SelectTrigger>
            <SelectContent>
              {["Admissions", "Academics", "Placements", "General"].map((d) => (
                <SelectItem key={d} value={d}>{d}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.department && <p className="text-xs text-red-400">{errors.department.message}</p>}
        </div>
        <div>
          <Label>Message</Label>
          <Textarea {...register("message")} rows={4} className="mt-1 glass border-white/10" />
          {errors.message && <p className="text-xs text-red-400">{errors.message.message}</p>}
        </div>
        <Button type="submit" className="w-full bg-gold-gradient text-navy-950 hover:opacity-90">Send Message</Button>
      </form>
    </GlassCard>
  );
}
