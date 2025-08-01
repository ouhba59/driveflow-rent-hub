import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Search, Filter, Star, Users, Fuel, Settings, ArrowRight, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/layout/Navigation";
import luxurySedan from "@/assets/luxury-sedan.jpg";
import modernSuv from "@/assets/modern-suv.jpg";
import sportsCar from "@/assets/sports-car.jpg";

const Cars = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    fuel: "",
    transmission: "",
    brand: ""
  });

  const cars = [
    {
      id: 1,
      name: "BMW 5 Series",
      brand: "BMW",
      category: "Luxury Sedan",
      image: luxurySedan,
      price: 89,
      rating: 4.8,
      reviews: 124,
      features: {
        passengers: 5,
        fuel: "Hybrid",
        transmission: "Automatic"
      },
      available: true,
      popular: true
    },
    {
      id: 2,
      name: "Toyota Highlander",
      brand: "Toyota",
      category: "Family SUV",
      image: modernSuv,
      price: 65,
      rating: 4.6,
      reviews: 89,
      features: {
        passengers: 7,
        fuel: "Gasoline",
        transmission: "Automatic"
      },
      available: true,
      popular: false
    },
    {
      id: 3,
      name: "Ferrari 488",
      brand: "Ferrari",
      category: "Sports Car",
      image: sportsCar,
      price: 299,
      rating: 4.9,
      reviews: 56,
      features: {
        passengers: 2,
        fuel: "Premium",
        transmission: "Manual"
      },
      available: false,
      popular: false
    },
    // Duplicate cars for demo
    {
      id: 4,
      name: "Mercedes C-Class",
      brand: "Mercedes",
      category: "Luxury Sedan",
      image: luxurySedan,
      price: 95,
      rating: 4.7,
      reviews: 98,
      features: {
        passengers: 5,
        fuel: "Gasoline",
        transmission: "Automatic"
      },
      available: true,
      popular: false
    },
    {
      id: 5,
      name: "Honda CR-V",
      brand: "Honda",
      category: "Compact SUV",
      image: modernSuv,
      price: 55,
      rating: 4.5,
      reviews: 156,
      features: {
        passengers: 5,
        fuel: "Hybrid",
        transmission: "Automatic"
      },
      available: true,
      popular: true
    },
    {
      id: 6,
      name: "Porsche 911",
      brand: "Porsche",
      category: "Sports Car",
      image: sportsCar,
      price: 399,
      rating: 4.9,
      reviews: 34,
      features: {
        passengers: 2,
        fuel: "Premium",
        transmission: "Manual"
      },
      available: true,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Find Your Perfect Car</h1>
          <p className="text-muted-foreground">Choose from our premium collection of rental vehicles</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Filters</h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setShowFilters(false)}
                >
                  <Filter className="h-4 w-4" />
                </Button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search cars..."
                    className="pl-9"
                    value={filters.search}
                    onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                  />
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}/day
                </label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={500}
                  step={10}
                  className="w-full"
                />
              </div>

              {/* Category */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Category</label>
                <Select value={filters.category} onValueChange={(value) => setFilters({ ...filters, category: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Categories</SelectItem>
                    <SelectItem value="economy">Economy</SelectItem>
                    <SelectItem value="compact">Compact</SelectItem>
                    <SelectItem value="sedan">Sedan</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                    <SelectItem value="sports">Sports Car</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Brand */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Brand</label>
                <Select value={filters.brand} onValueChange={(value) => setFilters({ ...filters, brand: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Brands" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Brands</SelectItem>
                    <SelectItem value="bmw">BMW</SelectItem>
                    <SelectItem value="mercedes">Mercedes</SelectItem>
                    <SelectItem value="toyota">Toyota</SelectItem>
                    <SelectItem value="honda">Honda</SelectItem>
                    <SelectItem value="ferrari">Ferrari</SelectItem>
                    <SelectItem value="porsche">Porsche</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Fuel Type */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Fuel Type</label>
                <Select value={filters.fuel} onValueChange={(value) => setFilters({ ...filters, fuel: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Fuel Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Fuel Types</SelectItem>
                    <SelectItem value="gasoline">Gasoline</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                    <SelectItem value="electric">Electric</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Transmission */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Transmission</label>
                <Select value={filters.transmission} onValueChange={(value) => setFilters({ ...filters, transmission: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Transmissions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Transmissions</SelectItem>
                    <SelectItem value="automatic">Automatic</SelectItem>
                    <SelectItem value="manual">Manual</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button variant="outline" className="w-full">
                Clear All Filters
              </Button>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-6">
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(true)}
                className="w-full"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Show Filters
              </Button>
            </div>

            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">{cars.length} cars available</p>
              <Select defaultValue="recommended">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Cars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cars.map((car) => (
                <Card key={car.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={car.image} 
                      alt={car.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {car.popular && (
                        <Badge className="bg-accent text-accent-foreground">
                          Popular
                        </Badge>
                      )}
                      {!car.available && (
                        <Badge variant="destructive">
                          Unavailable
                        </Badge>
                      )}
                    </div>
                    <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{car.rating}</span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-foreground mb-1">{car.name}</h3>
                      <p className="text-muted-foreground">{car.category}</p>
                    </div>

                    {/* Features */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{car.features.passengers}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Fuel className="h-4 w-4" />
                        <span>{car.features.fuel}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Settings className="h-4 w-4" />
                        <span>{car.features.transmission}</span>
                      </div>
                    </div>

                    {/* Reviews */}
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span>{car.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{car.reviews} reviews</span>
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-foreground">${car.price}</span>
                        <span className="text-muted-foreground">/day</span>
                      </div>
                      <Button 
                        variant={car.available ? "premium" : "outline"} 
                        size="sm" 
                        disabled={!car.available}
                        asChild={car.available}
                      >
                        {car.available ? (
                          <Link to={`/cars/${car.id}`}>
                            Book Now
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        ) : (
                          <>Unavailable</>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;