import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Car, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Calendar,
  Star,
  Eye,
  Edit,
  Trash2,
  Plus
} from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import { cn } from "@/lib/utils";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    {
      title: "Active Rentals",
      value: "142",
      change: "+12%",
      icon: Car,
      positive: true
    },
    {
      title: "Monthly Revenue",
      value: "$45,230",
      change: "+23%",
      icon: DollarSign,
      positive: true
    },
    {
      title: "Total Customers",
      value: "2,845",
      change: "+8%",
      icon: Users,
      positive: true
    },
    {
      title: "Avg Rating",
      value: "4.8",
      change: "+0.2",
      icon: Star,
      positive: true
    }
  ];

  const recentBookings = [
    {
      id: "BK-001",
      customer: "John Smith",
      car: "BMW 5 Series",
      dates: "Dec 15 - Dec 18",
      status: "active",
      total: "$267"
    },
    {
      id: "BK-002",
      customer: "Sarah Johnson",
      car: "Toyota Highlander",
      dates: "Dec 16 - Dec 20",
      status: "pending",
      total: "$260"
    },
    {
      id: "BK-003",
      customer: "Mike Wilson",
      car: "Ferrari 488",
      dates: "Dec 18 - Dec 20",
      status: "completed",
      total: "$598"
    }
  ];

  const cars = [
    {
      id: 1,
      name: "BMW 5 Series",
      category: "Luxury Sedan",
      status: "available",
      bookings: 24,
      revenue: "$2,136"
    },
    {
      id: 2,
      name: "Toyota Highlander",
      category: "Family SUV",
      status: "rented",
      bookings: 18,
      revenue: "$1,170"
    },
    {
      id: 3,
      name: "Ferrari 488",
      category: "Sports Car",
      status: "maintenance",
      bookings: 8,
      revenue: "$2,392"
    }
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "bookings", label: "Bookings" },
    { id: "cars", label: "Cars" },
    { id: "customers", label: "Customers" },
    { id: "reviews", label: "Reviews" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
      case "available":
        return "bg-success text-success-foreground";
      case "pending":
        return "bg-warning text-warning-foreground";
      case "completed":
        return "bg-primary text-primary-foreground";
      case "rented":
        return "bg-accent text-accent-foreground";
      case "maintenance":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your car rental business</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-1 mb-8 p-1 bg-muted rounded-lg">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative",
                activeTab === tab.id && "bg-card shadow-sm"
              )}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                        <div className="flex items-center space-x-2">
                          <p className="text-2xl font-bold">{stat.value}</p>
                          <span className={cn(
                            "text-xs px-1.5 py-0.5 rounded",
                            stat.positive ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
                          )}>
                            {stat.change}
                          </span>
                        </div>
                      </div>
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <stat.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Bookings */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Recent Bookings</CardTitle>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBookings.map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">{booking.customer}</p>
                          <p className="text-sm text-muted-foreground">{booking.car}</p>
                          <p className="text-xs text-muted-foreground flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {booking.dates}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(booking.status)}>
                            {booking.status}
                          </Badge>
                          <p className="text-sm font-medium mt-1">{booking.total}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Top Performing Cars */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Top Performing Cars</CardTitle>
                  <Button variant="outline" size="sm">
                    <TrendingUp className="h-4 w-4" />
                    Analytics
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {cars.map((car) => (
                      <div key={car.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">{car.name}</p>
                          <p className="text-sm text-muted-foreground">{car.category}</p>
                          <p className="text-xs text-muted-foreground">{car.bookings} bookings</p>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(car.status)}>
                            {car.status}
                          </Badge>
                          <p className="text-sm font-medium mt-1">{car.revenue}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Cars Management Tab */}
        {activeTab === "cars" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Car Management</h2>
              <Button variant="premium">
                <Plus className="h-4 w-4" />
                Add New Car
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b">
                      <tr>
                        <th className="text-left p-4 font-medium">Car</th>
                        <th className="text-left p-4 font-medium">Category</th>
                        <th className="text-left p-4 font-medium">Status</th>
                        <th className="text-left p-4 font-medium">Bookings</th>
                        <th className="text-left p-4 font-medium">Revenue</th>
                        <th className="text-left p-4 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cars.map((car) => (
                        <tr key={car.id} className="border-b hover:bg-muted/50">
                          <td className="p-4">
                            <div>
                              <p className="font-medium">{car.name}</p>
                            </div>
                          </td>
                          <td className="p-4 text-muted-foreground">{car.category}</td>
                          <td className="p-4">
                            <Badge className={getStatusColor(car.status)}>
                              {car.status}
                            </Badge>
                          </td>
                          <td className="p-4">{car.bookings}</td>
                          <td className="p-4 font-medium">{car.revenue}</td>
                          <td className="p-4">
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Other tabs content would go here */}
        {activeTab !== "overview" && activeTab !== "cars" && (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} management coming soon...
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
