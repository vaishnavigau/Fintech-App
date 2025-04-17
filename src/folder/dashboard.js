import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { BarChart2, IndianRupee, ArrowRight, User } from 'lucide-react'

export default function DashboardScreen({ onNavigate }) {
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false)

  return (
    <Card className="bg-gray-200 text-black">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg">Good Morning,</CardTitle>
          <p className="text-sm text-gray-600">Kristin Watson</p>
        </div>
        <Sheet open={isUserInfoOpen} onOpenChange={setIsUserInfoOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <User className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>User Information</SheetTitle>
            </SheetHeader>
            <div className="py-4">
              <img src="/placeholder.svg?height=100&width=100" alt="User" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-center mb-2">Kristin Watson</h3>
              <p className="text-sm text-gray-600 text-center mb-4">kristin.watson@example.com</p>
              <div className="space-y-2">
                <p><strong>Account Number:</strong> XXXX-XXXX-1234</p>
                <p><strong>Joined:</strong> January 15, 2023</p>
                <p><strong>Last Login:</strong> Today, 9:30 AM</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </CardHeader>
      <CardContent>
        <Card className="bg-gray-300 mb-6">
          <CardContent className="p-4">
            <p className="text-sm mb-1">Your Balance</p>
            <h2 className="text-2xl font-bold mb-2">₹12,692.00</h2>
            <p className="text-sm">**** **** **** 4678</p>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-4 gap-4 mb-6">
          {['Transfer', 'Savings', 'Loans', 'More'].map((service) => (
            <Button key={service} variant="outline" className="flex flex-col items-center p-2 h-auto bg-gray-300 text-black hover:bg-gray-400">
              <IndianRupee className="h-6 w-6 mb-1" />
              <span className="text-xs">{service}</span>
            </Button>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Recent Transactions</h3>
          <div className="bg-gray-300 p-3 rounded-lg flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-orange-500 p-2 rounded-full mr-3">
                <BarChart2 className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium">Concert Tickets</p>
                <p className="text-sm text-gray-600">2023-05-16</p>
              </div>
            </div>
            <p className="font-semibold">₹150.39</p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button variant="link" className="text-orange-600 font-semibold" onClick={() => onNavigate('statistics')}>
            View Statistics <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}