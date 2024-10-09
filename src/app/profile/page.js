'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';

export default function Profile() {
  const { user, loading, loginWithGoogle, token } = useAuth();

  // useEffect(() => {
  //   if (!loading && !user && !token) {
  //     // If user is not logged in and no token is found, redirect to login
  //     loginWithGoogle();
  //   }
  // }, [user, loading, token]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div>
          <h1>Welcome, {user.name}!</h1>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>You are not logged in</p>
      )}
    </div>
  );
}

// "use client";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";

// export default function Page() {
//   const user = {
//     username: "ClaireYu",
//     email: "claire.yu@example.com",
//     avatarUrl: "https://example.com/avatar.png",
//   };

//   const handleEditProfile = () => {
//     console.log("Edit Profile");
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <br />
//       <div className="flex justify-center">
//         <Card className="w-96">
//           <CardHeader className="text-center">
//             <CardTitle>User Information</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="flex flex-col items-center space-y-4">
//               {/* Avatar Section */}
//               <Avatar className="w-24 h-24">
//                 <AvatarImage src={user.avatarUrl} alt={user.username} />
//                 <AvatarFallback>{user.username.charAt(0)}</AvatarFallback>
//               </Avatar>

//               {/* User Details Section */}
//               <div className="text-center space-y-2">
//                 <div>
//                   <Label className="font-semibold">Username</Label>
//                   <p>{user.username}</p>
//                 </div>
//                 <div>
//                   <Label className="font-semibold">Email</Label>
//                   <p>{user.email}</p>
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <Button
//                 variant="default"
//                 className="w-full"
//                 onClick={() => {
//                   // Your edit profile logic here, e.g., navigate to edit profile page
//                   console.log("Edit Profile clicked");
//                 }}>
//                 Edit Profile
//               </Button>
//               <Button variant="secondary" className="w-full">Logout</Button>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
