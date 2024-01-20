'use client'

import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function LoginPage() {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex items-stretch bg-gray-100 dark:bg-gray-900">
      <div className="flex-1 h-full">
        <img
          className="object-cover h-full w-full"
          height="1000"
          src="https://source.unsplash.com/random?wallpapers"
          style={{
            aspectRatio: "1000/1000",
            objectFit: "cover",
          }}
          alt="splash wallpaper"
          width="1000"
        />
      </div>
      <div className="w-4/10 h-full flex items-stretch">
        <div className="w-full h-full p-8 space-y-6 bg-white shadow-lg rounded-md dark:bg-gray-800 overflow-auto">
          <Tabs className="w-full h-full flex flex-col" defaultValue="login">
            <TabsList className="flex justify-center space-x-4">
              <TabsTrigger value="login">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent className="flex-1" value="login">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Input id="login-email" placeholder="Email" required type="email" />
                </div>
                <div className="space-y-2">
                  <Input id="login-password" placeholder="Password" required type="password" />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center" htmlFor="remember-me">
                    <input className="mr-2" id="remember-me" type="checkbox" />
                    <span>Remember me</span>
                  </label>
                </div>
                <Button className="w-full" type="submit" onClick={()=>{router.push('/home')}}>
                  Sign In
                </Button>
                <Link className="text-sm text-blue-500 hover:underline" href="#">
                  Forgot password?
                </Link>
              </form>
            </TabsContent>
            <TabsContent className="flex-1" value="signup">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Input id="signup-name" placeholder="Name" required />
                </div>
                <div className="space-y-2">
                  <Input id="signup-email" placeholder="Email" required type="email" />
                </div>
                <div className="space-y-2">
                  <Input id="signup-password" placeholder="Password" required type="password" />
                </div>
                <div className="space-y-2">
                  <Input id="signup-confirm-password" placeholder="Confirm Password" required type="password" />
                </div>
                <Button className="w-full" type="submit">
                  Sign Up
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
