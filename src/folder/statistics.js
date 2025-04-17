import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BarChart2, PieChart, ChevronLeft, PlusCircle } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Mon', expenses: 1000, income: 1500 },
  { name: 'Tue', expenses: 1200, income: 1500 },
  { name: 'Wed', expenses: 800, income: 1500 },
  { name: 'Thu', expenses: 1500, income: 1500 },
  { name: 'Fri', expenses: 2000, income: 2000 },
  { name: 'Sat', expenses: 1800, income: 1500 },
  { name: 'Sun', expenses: 1300, income: 1500 },
]

export default function StatisticsScreen({ onBack }) {
  const [showAddExpense, setShowAddExpense] = useState(false)
  const [showAddIncome, setShowAddIncome] = useState(false)

  return (
    <Card className="bg-gray-200 text-black">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <CardTitle className="ml-2">Statistics</CardTitle>
          </div>
          <Button variant="outline" size="sm" onClick={() => setShowAddExpense(true)}>
            <PlusCircle className="h-4 w-4 mr-2" /> Add Expense
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="expenses">
          <TabsList className="grid w-full grid-cols-2 mb-4 bg-gray-300">
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
            <TabsTrigger value="income">Income</TabsTrigger>
          </TabsList>
          <TabsContent value="expenses">
            <Card className="bg-gray-300 mb-4">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Total Expenses</h3>
                <p className="text-2xl font-bold mb-4">₹2,364.00</p>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="expenses" stroke="#f97316" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <h3 className="font-semibold mb-2">Expenses by category</h3>
            <div className="space-y-2">
              {[
                { category: 'Shopping', amount: 895.99, icon: <PieChart className="h-4 w-4" /> },
                { category: 'Transportation', amount: 286.34, icon: <BarChart2 className="h-4 w-4" /> },
              ].map((item) => (
                <div key={item.category} className="flex items-center justify-between bg-gray-300 p-3 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-orange-500 p-2 rounded-full mr-3">
                      {item.icon}
                    </div>
                    <span>{item.category}</span>
                  </div>
                  <span>₹{item.amount}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="income">
            <Card className="bg-gray-300">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Total Income</h3>
                  <Button variant="outline" size="sm" onClick={() => setShowAddIncome(true)}>
                    <PlusCircle className="h-4 w-4 mr-2" /> Add Income
                  </Button>
                </div>
                <p className="text-2xl font-bold mb-4">₹4,500.00</p>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="income" stroke="#22c55e" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
      {showAddExpense && (
        <AddExpenseModal onClose={() => setShowAddExpense(false)} />
      )}
      {showAddIncome && (
        <AddIncomeModal onClose={() => setShowAddIncome(false)} />
      )}
    </Card>
  )
}

function AddExpenseModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <Card className="w-full max-w-md bg-gray-200">
        <CardHeader>
          <CardTitle>Add Expense</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => { e.preventDefault(); onClose(); }}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="expense-amount">Amount</Label>
                <Input id="expense-amount" placeholder="Enter amount" type="number" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expense-category">Category</Label>
                <Input id="expense-category" placeholder="Enter category" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expense-date">Date</Label>
                <Input id="expense-date" type="date" required />
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
                <Button type="submit">Add Expense</Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

function AddIncomeModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <Card className="w-full max-w-md bg-gray-200">
        <CardHeader>
          <CardTitle>Add Income</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => { e.preventDefault(); onClose(); }}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="income-amount">Amount</Label>
                <Input id="income-amount" placeholder="Enter amount" type="number" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="income-source">Source</Label>
                <Input id="income-source" placeholder="Enter income source" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="income-date">Date</Label>
                <Input id="income-date" type="date" required />
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
                <Button type="submit">Add Income</Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}