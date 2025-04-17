import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginScreen({ onLogin }) {
  return (
    <Card className="bg-gray-200 text-black overflow-hidden">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Login to WEALTHMATE</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Enter your password" type="password" required />
            </div>
            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-black">
              Log In
            </Button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <Button variant="link" className="text-orange-500 p-0">Forgot password?</Button>
        </div>
      </CardContent>
    </Card>
  )
}