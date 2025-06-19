"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight"
import { creditBenefits, features } from "@/lib/data"
import { motion } from "framer-motion"
import { ArrowRight, Check, Stethoscope } from "lucide-react"
import Link from "next/link"

export const HomeComponent = () => {
  return (
    <div className="bg-background">
      <section>
        <HeroHighlight className="space-y-4">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-4xl px-4 md:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-snug  text-center mx-auto flex flex-col gap-3"
          >
            <Highlight className="text-white text-xl md:text-2xl w-fit mx-auto">
              Healthcare made simple
            </Highlight>

            <span className="md:leading-14">
              Connect with doctors <br />
              <span className="text-blue-500 dark:text-blue-400">
                anytime, anywhere
              </span>
            </span>
          </motion.h1>

          <p className="text-muted-foreground max-w-md md:max-w-xl mx-auto text-sm md:text-base text-center">
            Book appointments, consult via video, and manage your healthcare
            journey all in one secure platform.
          </p>

          <div className="flex justify-center gap-3 mt-12">
            <Button
              asChild
              size={"lg"}
              className="bg-blue-700/80 text-white hover:bg-blue-600 transition duration-300 ease-in-out flex items-center"
            >
              <Link href={"/onboarding"}>
                Get Started <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size={"lg"}
              variant={"outline"}
              className="border-blue-700/30 hover:bg-muted/80"
            >
              <Link href={"/doctors"}>Find Doctors</Link>
            </Button>
          </div>
        </HeroHighlight>
      </section>

      <section className="py-20 bg-blue-50 dark:bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform makes healthcare accessible with just a few clicks
            </p>
          </div>

          {/* features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                className="border-blue-900/20 hover:border-blue-800/40 transition-all duration-300"
                key={index}
              >
                <CardHeader className="pb-2">
                  <div className="bg-blue-900/20 p-3 rounded-lg w-fit mb-4">
                    <feature.icon className="text-blue-500 dark:text-blue-200" />
                  </div>

                  <CardTitle className="text-xl font-semibold text-black dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-600 border-blue-700/30 dark:bg-blue-900/30 dark:border-blue-700/30 px-4 py-1 text-blue-200 dark:text-blue-400 text-sm font-medium mb-4">
              Affordable Healthcare
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              Consultation Packages
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the perfect consultation package that fits your healthcare
              needs
            </p>
          </div>

          <div className="">
            {/* Pricing table */}
            <Card className="mt-12 bg-muted/20 border-blue-900/30">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-black dark:text-white flex items-center">
                  <Stethoscope className="h-5 w-5 mr-2 text-blue-400" />
                  How Our Credit System Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  {creditBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-center ">
                      <div className="mr-3 mt-1 bg-blue-900/20 p-1 rounded-full">
                        <Check className="h-4 w-4 text-blue-400" />
                      </div>
                      <p
                        dangerouslySetInnerHTML={{ __html: benefit }}
                        className="text-muted-foreground"
                      />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-linear-to-r dark:bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 dark:from-blue-900/30 dark:to-blue-950/20 dark:border-blue-800/20">
            <CardContent className="p-8 md:p-12 lg:p-16 relative overflow-hidden">
              <div className="">
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
                  Ready to take control of your healthcare?
                </h2>
                <p className="text-lg text-gray-500 dark:text-muted-foreground mb-8 max-w-3xl">
                  Join thousands of users who have simplified their healthcare
                  journey with our platform. Get started today and experience
                  healthcare the way it should be.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size={"lg"}
                    className="bg-blue-600 text-white hover:bg-blue-700"
                  >
                    <Link href="/sign-up">Sign Up Now</Link>
                  </Button>
                  <Button
                    asChild
                    variant={"outline"}
                    size={"lg"}
                    className="border-blue-700/30 hover:bg-muted/80"
                  >
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
