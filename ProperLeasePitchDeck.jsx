
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function ProperLeasePitchDeck() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold">ProperLease.io Pitch Deck</h1>

      <Card>
        <CardContent>
          <h2 className="text-2xl font-semibold">1. Overview</h2>
          <p>ProperLease.io is an AI-powered, blockchain-native landlord SaaS platform starting in Arizona. It replaces traditional property managers by automating leasing, escrow, legal workflows, and communication.</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-2xl font-semibold">2. The Problem</h2>
          <p>10M+ rental units are owned by small landlords who lack affordable tools. Property managers charge 8–12%, leaving owners with limited profits and no automation.</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-2xl font-semibold">3. The Solution</h2>
          <p>ProperLease automates leases, rent collection, tenant screening, legal notices, maintenance coordination, and smart lock integration—all via web and mobile apps.</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-2xl font-semibold">4. Features</h2>
          <ul className="list-disc pl-6">
            <li>Smart Lease Engine (AZ compliant)</li>
            <li>Automated Escrow Logic</li>
            <li>Smart Lock Integration</li>
            <li>Tenant Screening (RentSpree)</li>
            <li>LegalShield + Legal Automation</li>
            <li>AI Assistant for landlords and tenants</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-2xl font-semibold">5. Blockchain Edge (Algorand)</h2>
          <ul className="list-disc pl-6">
            <li>ASA Tokenized Leases</li>
            <li>Smart Escrow (LogicSig + ASC1)</li>
            <li>DAO-ready Portfolio Governance</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-2xl font-semibold">6. Market & Revenue Model</h2>
          <ul className="list-disc pl-6">
            <li>Tiered Pricing: Free, $19/mo, $49/mo</li>
            <li>Add-ons: Screening, smart locks, insurance</li>
            <li>Year 1 Target ARR: $165K</li>
            <li>Year 2 Target ARR: $900K+</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-2xl font-semibold">7. Capital Strategy</h2>
          <ul className="list-disc pl-6">
            <li>Phase 1: Grants ($50K–$150K)</li>
            <li>Phase 2: Pre-seed ($500K–$1M)</li>
            <li>Phase 3: Series A (National Expansion)</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-2xl font-semibold">8. Team & Traction</h2>
          <ul className="list-disc pl-6">
            <li>Founder with real estate + SaaS background</li>
            <li>Blockchain advisors on board</li>
            <li>MVP scoped, landlords signed for pilot</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-2xl font-semibold">9. Vision & Mission</h2>
          <p><strong>Vision:</strong> Be the #1 operating system for independent landlords.</p>
          <p><strong>Mission:</strong> Empower landlords with tools, automation, and on-chain trust—without needing a property manager.</p>
        </CardContent>
      </Card>

      <Button className="mt-4">Download PDF Pitch Deck</Button>
    </div>
  );
}
