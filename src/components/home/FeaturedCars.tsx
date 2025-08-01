import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Fuel, Settings, ArrowRight } from "lucide-react";
import luxurySedan from "@/assets/luxury-sedan.jpg";
import modernSuv from "@/assets/modern-suv.jpg";
import sportsCar from "@/assets/sports-car.jpg";
import { Link } from "react-router-dom";

const FeaturedCars = () => {
  const featuredCars = [
    {
      id: 1,
      name: "BMW 5 Series",
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
      popular: true
    },
    {
      id: 2,
      name: "Toyota Highlander",
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
      popular: false
    },
    {
      id: 3,
      name: "Ferrari 488",
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
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Vehicles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular rental cars, chosen by thousands of satisfied customers
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCars.map((car, index) => (
            <Card key={car.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="relative overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {car.popular && (
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    Popular Choice
                  </Badge>
                )}
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
                  <Button variant="premium" size="sm" asChild>
                    <Link to={`/cars/${car.id}`}>
                      Book Now
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Cars Button */}
        <div className="text-center animate-fade-in">
          <Button variant="accent" size="lg" asChild>
            <Link to="/cars">
              View All Cars
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;