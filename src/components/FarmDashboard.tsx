import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Users, Camera, Sprout, Calendar, Building2 } from "lucide-react";

interface Area {
  Area_ID: number;
  User_ID: number;
  Area_Name: string;
  Region: string;
  Province: string;
  created_at: string;
  Organization: string;
}

interface User {
  User_ID: number;
  Email: string;
  First_name: string;
  Last_name: string;
  Sex: string;
  Contact_No: string;
  User_Type: string;
}

// Sample data based on the SQL dump
const sampleAreas: Area[] = [
  {
    Area_ID: 6,
    User_ID: 1,
    Area_Name: "Naga Farm",
    Region: "Bicol",
    Province: "Naga",
    created_at: "2025-09-01 20:11:12",
    Organization: "Volkswagen"
  },
  {
    Area_ID: 7,
    User_ID: 1,
    Area_Name: "Vigan farm",
    Region: "Ilocos Region",
    Province: "Ilocos Sur",
    created_at: "2025-09-04 11:15:48",
    Organization: "Schmeterling Corp"
  },
  {
    Area_ID: 9,
    User_ID: 1,
    Area_Name: "Cagayan Farm",
    Region: "Cagayan",
    Province: "Cagayan De Oro",
    created_at: "2025-09-11 12:33:56",
    Organization: "Cagayan Municipality"
  }
];

const sampleUsers: User[] = [
  {
    User_ID: 1,
    Email: "test@gmail.com",
    First_name: "Test",
    Last_name: "User",
    Sex: "Male",
    Contact_No: "124857316",
    User_Type: "User"
  },
  {
    User_ID: 2,
    Email: "cjml@gmail.com",
    First_name: "Lorenzo",
    Last_name: "Ferrer",
    Sex: "Male",
    Contact_No: "09060451234",
    User_Type: "User"
  }
];

const FarmDashboard = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/50 to-accent/20 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-primary rounded-full shadow-glow">
            <Sprout className="h-8 w-8 text-primary-foreground" />
            <h1 className="text-2xl font-bold text-primary-foreground">
              Agricultural Farm Management System
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Manage your farms, track coordinates, monitor crops, and organize agricultural data efficiently
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Farms</CardTitle>
              <Sprout className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{sampleAreas.length}</div>
              <p className="text-xs text-muted-foreground">Active agricultural areas</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Registered Users</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{sampleUsers.length}</div>
              <p className="text-xs text-muted-foreground">Farm managers & users</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Regions Covered</CardTitle>
              <MapPin className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">3</div>
              <p className="text-xs text-muted-foreground">Bicol, Ilocos, Cagayan</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Farm Images</CardTitle>
              <Camera className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">12</div>
              <p className="text-xs text-muted-foreground">Documentation photos</p>
            </CardContent>
          </Card>
        </div>

        {/* Farm Areas Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Farm Areas</h2>
            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-elegant">
              Add New Farm
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleAreas.map((area) => (
              <Card key={area.Area_ID} className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-xl text-primary group-hover:text-primary-glow transition-colors">
                        {area.Area_Name}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {area.Province}, {area.Region}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                      Active
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="h-4 w-4" />
                    <span>{area.Organization}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Created {formatDate(area.created_at)}</span>
                  </div>

                  <Separator />
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors">
                      Edit Farm
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Users Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Registered Users</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sampleUsers.map((user) => (
              <Card key={user.User_ID} className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-primary">
                        {user.First_name} {user.Last_name}
                      </CardTitle>
                      <CardDescription>{user.Email}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {user.User_Type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Contact:</span> {user.Contact_No}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Gender:</span> {user.Sex}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmDashboard;