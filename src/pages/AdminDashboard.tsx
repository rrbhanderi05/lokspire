import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAdmin } from '@/contexts/AdminContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  Building, 
  Star, 
  AlertTriangle, 
  TrendingUp, 
  Eye, 
  Edit, 
  Trash2, 
  Check, 
  X, 
  Search,
  Filter,
  Download,
  Bell,
  Shield,
  Activity,
  BarChart3,
  Calendar,
  Clock,
  MapPin,
  Phone
} from 'lucide-react';
import { allBusinesses } from '@/data/allBusinesses';
import { toast } from '@/hooks/use-toast';

interface Business {
  id: number;
  title: string;
  category: string;
  location: string;
  description: string;
  rating: number;
  image: string;
  whatsapp: string;
  status: 'approved' | 'pending' | 'suspended';
  ownerName: string;
  ownerEmail: string;
  createdAt: Date;
  lastUpdated: Date;
  reviewCount: number;
}

interface Review {
  id: number;
  businessId: number;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: Date;
  status: 'approved' | 'flagged' | 'deleted';
  flagReason?: string;
}

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'business_owner' | 'customer';
  lastLogin: Date;
  businessCount: number;
  reviewCount: number;
  status: 'active' | 'suspended' | 'banned';
}

const AdminDashboard = () => {
  const { isAdmin, adminUser, loading } = useAdmin();
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);
  const [notifications, setNotifications] = useState<any[]>([]);

  // Mock data initialization
  useEffect(() => {
    if (isAdmin) {
      // Initialize businesses with admin fields
      const adminBusinesses: Business[] = allBusinesses.map((business, index) => ({
        ...business,
        status: index % 3 === 0 ? 'pending' : index % 5 === 0 ? 'suspended' : 'approved',
        ownerName: `Owner ${index + 1}`,
        ownerEmail: `owner${index + 1}@example.com`,
        createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
        lastUpdated: new Date(),
        reviewCount: Math.floor(Math.random() * 50) + 1
      }));
      setBusinesses(adminBusinesses);

      // Mock reviews
      const mockReviews: Review[] = Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        businessId: Math.floor(Math.random() * allBusinesses.length) + 1,
        userId: `user_${i + 1}`,
        userName: `User ${i + 1}`,
        rating: Math.floor(Math.random() * 5) + 1,
        comment: `This is a sample review comment ${i + 1}`,
        createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
        status: i % 10 === 0 ? 'flagged' : 'approved',
        flagReason: i % 10 === 0 ? 'Inappropriate content' : undefined
      }));
      setReviews(mockReviews);

      // Mock users
      const mockUsers: AdminUser[] = Array.from({ length: 30 }, (_, i) => ({
        id: `user_${i + 1}`,
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        role: i % 3 === 0 ? 'business_owner' : 'customer',
        lastLogin: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
        businessCount: i % 3 === 0 ? Math.floor(Math.random() * 3) + 1 : 0,
        reviewCount: Math.floor(Math.random() * 10),
        status: i % 15 === 0 ? 'suspended' : 'active'
      }));
      setUsers(mockUsers);

      // Mock notifications
      setNotifications([
        { id: 1, type: 'new_business', message: 'New business pending approval', time: new Date() },
        { id: 2, type: 'flagged_review', message: 'Review flagged for inappropriate content', time: new Date() },
        { id: 3, type: 'user_report', message: 'User reported for spam', time: new Date() }
      ]);
    }
  }, [isAdmin]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Checking admin access...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  const handleBusinessAction = (businessId: number, action: 'approve' | 'suspend' | 'delete') => {
    setBusinesses(prev => prev.map(business => 
      business.id === businessId 
        ? { ...business, status: action === 'delete' ? 'suspended' : action === 'approve' ? 'approved' : 'suspended' }
        : business
    ));
    
    toast({
      title: "Action completed",
      description: `Business ${action}d successfully.`
    });
  };

  const handleReviewAction = (reviewId: number, action: 'approve' | 'delete' | 'flag') => {
    setReviews(prev => prev.map(review => 
      review.id === reviewId 
        ? { ...review, status: action === 'delete' ? 'deleted' : action === 'flag' ? 'flagged' : 'approved' }
        : review
    ));
    
    toast({
      title: "Review updated",
      description: `Review ${action}d successfully.`
    });
  };

  const handleUserAction = (userId: string, action: 'suspend' | 'activate' | 'ban') => {
    setUsers(prev => prev.map(user => 
      user.id === userId 
        ? { ...user, status: action === 'activate' ? 'active' : action === 'suspend' ? 'suspended' : 'banned' }
        : user
    ));
    
    toast({
      title: "User updated",
      description: `User ${action}d successfully.`
    });
  };

  const exportData = (type: 'businesses' | 'reviews' | 'users') => {
    let data: any[] = [];
    let filename = '';
    
    switch (type) {
      case 'businesses':
        data = businesses;
        filename = 'businesses.csv';
        break;
      case 'reviews':
        data = reviews;
        filename = 'reviews.csv';
        break;
      case 'users':
        data = users;
        filename = 'users.csv';
        break;
    }
    
    // Simple CSV export
    const csvContent = "data:text/csv;charset=utf-8," + 
      Object.keys(data[0] || {}).join(",") + "\n" +
      data.map(row => Object.values(row).join(",")).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Export completed",
      description: `${type} data exported successfully.`
    });
  };

  const filteredBusinesses = businesses.filter(business => {
    const matchesSearch = business.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.ownerName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || business.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    totalBusinesses: businesses.length,
    approvedBusinesses: businesses.filter(b => b.status === 'approved').length,
    pendingBusinesses: businesses.filter(b => b.status === 'pending').length,
    suspendedBusinesses: businesses.filter(b => b.status === 'suspended').length,
    totalReviews: reviews.length,
    flaggedReviews: reviews.filter(r => r.status === 'flagged').length,
    totalUsers: users.length,
    activeUsers: users.filter(u => u.status === 'active').length
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Welcome back, {adminUser?.email}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications ({notifications.length})
              </Button>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                {adminUser?.role === 'super_admin' ? 'Super Admin' : 'Admin'}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Building className="w-8 h-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Businesses</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalBusinesses}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Clock className="w-8 h-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending Approval</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.pendingBusinesses}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Star className="w-8 h-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Reviews</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalReviews}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <AlertTriangle className="w-8 h-8 text-red-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Flagged Reviews</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.flaggedReviews}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="businesses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="businesses">Businesses</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Businesses Tab */}
          <TabsContent value="businesses" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Business Management</CardTitle>
                  <div className="flex space-x-2">
                    <Button onClick={() => exportData('businesses')} variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search businesses..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="all">All Status</option>
                    <option value="approved">Approved</option>
                    <option value="pending">Pending</option>
                    <option value="suspended">Suspended</option>
                  </select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredBusinesses.map((business) => (
                    <div key={business.id} className="border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <img 
                            src={business.image} 
                            alt={business.title}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-lg">{business.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Owner: {business.ownerName} | {business.category}
                            </p>
                            <div className="flex items-center space-x-4 mt-1">
                              <span className="flex items-center text-sm">
                                <MapPin className="w-4 h-4 mr-1" />
                                {business.location}
                              </span>
                              <span className="flex items-center text-sm">
                                <Star className="w-4 h-4 mr-1 text-yellow-500" />
                                {business.rating} ({business.reviewCount} reviews)
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge 
                            variant={business.status === 'approved' ? 'default' : 
                                   business.status === 'pending' ? 'secondary' : 'destructive'}
                          >
                            {business.status}
                          </Badge>
                          <div className="flex space-x-1">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setSelectedBusiness(business)}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            {business.status === 'pending' && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleBusinessAction(business.id, 'approve')}
                                className="text-green-600 hover:text-green-700"
                              >
                                <Check className="w-4 h-4" />
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleBusinessAction(business.id, 'suspend')}
                              className="text-orange-600 hover:text-orange-700"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleBusinessAction(business.id, 'delete')}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Review Management</CardTitle>
                  <Button onClick={() => exportData('reviews')} variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reviews.slice(0, 10).map((review) => (
                    <div key={review.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-medium">{review.userName}</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                            <Badge 
                              variant={review.status === 'approved' ? 'default' : 
                                     review.status === 'flagged' ? 'destructive' : 'secondary'}
                            >
                              {review.status}
                            </Badge>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 mb-2">{review.comment}</p>
                          <p className="text-sm text-gray-500">
                            {review.createdAt.toLocaleDateString()} | Business ID: {review.businessId}
                          </p>
                          {review.flagReason && (
                            <p className="text-sm text-red-600 mt-1">Flag reason: {review.flagReason}</p>
                          )}
                        </div>
                        <div className="flex space-x-1">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleReviewAction(review.id, 'approve')}
                            className="text-green-600"
                          >
                            <Check className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleReviewAction(review.id, 'flag')}
                            className="text-orange-600"
                          >
                            <AlertTriangle className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleReviewAction(review.id, 'delete')}
                            className="text-red-600"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>User Management</CardTitle>
                  <Button onClick={() => exportData('users')} variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.slice(0, 10).map((user) => (
                    <div key={user.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold">{user.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
                          <div className="flex items-center space-x-4 mt-1 text-sm">
                            <span>Role: {user.role}</span>
                            <span>Businesses: {user.businessCount}</span>
                            <span>Reviews: {user.reviewCount}</span>
                            <span>Last login: {user.lastLogin.toLocaleDateString()}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge 
                            variant={user.status === 'active' ? 'default' : 
                                   user.status === 'suspended' ? 'secondary' : 'destructive'}
                          >
                            {user.status}
                          </Badge>
                          <div className="flex space-x-1">
                            {user.status !== 'active' && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleUserAction(user.id, 'activate')}
                                className="text-green-600"
                              >
                                Activate
                              </Button>
                            )}
                            {user.status === 'active' && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleUserAction(user.id, 'suspend')}
                                className="text-orange-600"
                              >
                                Suspend
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleUserAction(user.id, 'ban')}
                              className="text-red-600"
                            >
                              Ban
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Business Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Approved Businesses</span>
                      <span className="font-bold text-green-600">{stats.approvedBusinesses}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Pending Approval</span>
                      <span className="font-bold text-orange-600">{stats.pendingBusinesses}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Suspended</span>
                      <span className="font-bold text-red-600">{stats.suspendedBusinesses}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Approval Rate</span>
                      <span className="font-bold">
                        {((stats.approvedBusinesses / stats.totalBusinesses) * 100).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="w-5 h-5 mr-2" />
                    Review Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Total Reviews</span>
                      <span className="font-bold">{stats.totalReviews}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Flagged Reviews</span>
                      <span className="font-bold text-red-600">{stats.flaggedReviews}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Average Rating</span>
                      <span className="font-bold">
                        {(reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Flag Rate</span>
                      <span className="font-bold">
                        {((stats.flaggedReviews / stats.totalReviews) * 100).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <Bell className="w-5 h-5 text-blue-600" />
                      <div className="flex-1">
                        <p className="text-sm">{notification.message}</p>
                        <p className="text-xs text-gray-500">{notification.time.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Business Detail Modal */}
      {selectedBusiness && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{selectedBusiness.title}</h2>
                <Button variant="ghost" onClick={() => setSelectedBusiness(null)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="space-y-4">
                <img 
                  src={selectedBusiness.image} 
                  alt={selectedBusiness.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Owner</label>
                    <p className="font-semibold">{selectedBusiness.ownerName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Category</label>
                    <p className="font-semibold">{selectedBusiness.category}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Location</label>
                    <p className="font-semibold">{selectedBusiness.location}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Status</label>
                    <Badge variant={selectedBusiness.status === 'approved' ? 'default' : 'secondary'}>
                      {selectedBusiness.status}
                    </Badge>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Description</label>
                  <p className="mt-1">{selectedBusiness.description}</p>
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    onClick={() => handleBusinessAction(selectedBusiness.id, 'approve')}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Approve
                  </Button>
                  <Button 
                    onClick={() => handleBusinessAction(selectedBusiness.id, 'suspend')}
                    variant="outline"
                  >
                    Suspend
                  </Button>
                  <Button 
                    onClick={() => handleBusinessAction(selectedBusiness.id, 'delete')}
                    variant="destructive"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;