"use client";

import { useState } from "react";
import { COURSES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GlassCard } from "@/components/ui/GlassCard";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, XCircle } from "lucide-react";

export function EligibilityChecker() {
  const [course, setCourse] = useState("");
  const [percent, setPercent] = useState("");
  const [result, setResult] = useState<"eligible" | "not" | null>(null);

  const check = () => {
    const pct = parseFloat(percent);
    setResult(pct >= 45 && course ? "eligible" : "not");
  };

  return (
    <GlassCard>
      <h3 className="mb-4 text-xl font-semibold text-white">Eligibility Checker</h3>
      <div className="space-y-4">
        <div>
          <Label>Select Course</Label>
          <Select value={course} onValueChange={setCourse}>
            <SelectTrigger className="mt-1 glass border-white/10"><SelectValue placeholder="Choose course" /></SelectTrigger>
            <SelectContent>
              {COURSES.map((c) => (
                <SelectItem key={c.code} value={c.code}>{c.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>12th Percentage</Label>
          <Input type="number" value={percent} onChange={(e) => setPercent(e.target.value)} placeholder="e.g. 85" className="mt-1 glass border-white/10" />
        </div>
        <Button onClick={check} className="bg-gold-gradient text-navy-950">Check Eligibility</Button>
        {result && (
          <Alert className={result === "eligible" ? "border-emerald-500/50" : "border-red-500/50"}>
            {result === "eligible" ? <CheckCircle className="text-emerald-500" /> : <XCircle className="text-red-500" />}
            <AlertTitle>{result === "eligible" ? "Eligible!" : "Not Eligible"}</AlertTitle>
            <AlertDescription>
              {result === "eligible"
                ? "You meet the minimum requirements. Proceed to online application."
                : "Minimum 45% in PCM required. Consider improvement exams or alternate programs."}
            </AlertDescription>
          </Alert>
        )}
      </div>
    </GlassCard>
  );
}
