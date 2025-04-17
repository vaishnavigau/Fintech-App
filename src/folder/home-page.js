import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CreditCard } from 'lucide-react'

export default function WelcomeScreen({ onGetStarted, onLogin }) {
  return (
    <Card className="bg-gray-200 text-black overflow-hidden">
      <CardContent className="p-6">
        <div className="mb-8">
          <CreditCard className="w-16 h-16 text-orange-500 mb-4" />
          <h1 className="text-2xl font-bold mb-2">WEALTHMATE</h1>
          <p className="text-xl mb-4">Easiest way to manage your finances</p>
        </div>
        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black" onClick={onGetStarted}>
          Get Started
        </Button>
        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account? <Button variant="link" className="text-orange-500 p-0" onClick={onLogin}>Log in</Button>
        </p>
      </CardContent>
    </Card>
  )
}