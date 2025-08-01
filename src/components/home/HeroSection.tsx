import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Search, MapPin, Calendar, Car } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  const [searchData, setSearchData] = useState({
    location: "",
    pickupDate: "",
    returnDate: "",
    carType: ""
  });

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Find Your Perfect
            <span className="block bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Rental Car
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Discover premium vehicles for every journey. From luxury sedans to family SUVs, 
            we have the perfect car waiting for you.
          </p>
        </div>

        {/* Search Card */}
        <Card className="bg-card/95 backdrop-blur-lg p-6 md:p-8 shadow-xl animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Location */}
            <div className="lg:col-span-1">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Pickup location"
                  className="pl-10 h-12"
                  value={searchData.location}
                  onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                />
              </div>
            </div>

            {/* Pickup Date */}
            <div className="lg:col-span-1">
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  type="date"
                  placeholder="Pickup date"
                  className="pl-10 h-12"
                  value={searchData.pickupDate}
                  onChange={(e) => setSearchData({ ...searchData, pickupDate: e.target.value })}
                />
              </div>
            </div>

            {/* Return Date */}
            <div className="lg:col-span-1">
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  type="date"
                  placeholder="Return date"
                  className="pl-10 h-12"
                  value={searchData.returnDate}
                  onChange={(e) => setSearchData({ ...searchData, returnDate: e.target.value })}
                />
              </div>
            </div>

            {/* Car Type */}
            <div className="lg:col-span-1">
              <Select value={searchData.carType} onValueChange={(value) => setSearchData({ ...searchData, carType: value })}>
                <SelectTrigger className="h-12">
                  <Car className="h-5 w-5 text-muted-foreground mr-2" />
                  <SelectValue placeholder="Car type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="economy">Economy</SelectItem>
                  <SelectItem value="compact">Compact</SelectItem>
                  <SelectItem value="midsize">Midsize</SelectItem>
                  <SelectItem value="fullsize">Full Size</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                  <SelectItem value="suv">SUV</SelectItem>
                  <SelectItem value="sports">Sports Car</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Search Button */}
            <div className="lg:col-span-1">
              <Button variant="hero" size="lg" className="w-full h-12">
                <Search className="h-5 w-5" />
                Search Cars
              </Button>
            </div>
          </div>
        </Card>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in">
          <div className="text-center text-white">
            <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Car className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Fleet</h3>
            <p className="text-white/80">Choose from our collection of well-maintained, premium vehicles</p>
          </div>
          <div className="text-center text-white">
            <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <MapPin className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Flexible Pickup</h3>
            <p className="text-white/80">Pick up your car from multiple convenient locations</p>
          </div>
          <div className="text-center text-white">
            <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Search className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
            <p className="text-white/80">Simple, fast booking process with instant confirmation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;