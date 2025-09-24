import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { formatCurrency, calculateProgress } from '@/lib/utils'
import { GraduationCap, MapPin, Clock } from 'lucide-react'

export function FeaturedStudents() {
  // Mock data - in real app this would come from API
  const featuredStudents = [
    {
      id: '1',
      displayName: 'Sarah M.',
      major: 'Computer Science',
      school: 'State University',
      location: 'California, USA',
      totalDebt: 45000,
      raisedAmount: 38250,
      targetAmount: 45000,
      bio: 'Passionate about AI and machine learning. Working part-time while completing my degree in Computer Science. Your support helps me focus on my studies instead of worrying about debt.',
      profileImageUrl: null,
      graduationDate: '2024-05-15',
      daysLeft: 90
    },
    {
      id: '2',
      displayName: 'Marcus J.',
      major: 'Nursing',
      school: 'Metro Community College',
      location: 'Texas, USA',
      totalDebt: 32000,
      raisedAmount: 19200,
      targetAmount: 32000,
      bio: 'First-generation college student pursuing nursing to give back to my community. Planning to work in underserved areas after graduation.',
      profileImageUrl: null,
      graduationDate: '2024-12-20',
      daysLeft: 180
    },
    {
      id: '3',
      displayName: 'Elena R.',
      major: 'Environmental Science',
      school: 'Green Valley University',
      location: 'Colorado, USA',
      totalDebt: 38500,
      raisedAmount: 15400,
      targetAmount: 38500,
      bio: 'Dedicated to fighting climate change through research and policy. Your contribution helps me continue my studies in environmental conservation.',
      profileImageUrl: null,
      graduationDate: '2025-05-10',
      daysLeft: 365
    }
  ]

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Meet Our Students
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These dedicated students are working hard to complete their education.
            Your support can make the difference in their journey to success.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredStudents.map((student) => {
            const progress = calculateProgress(student.raisedAmount, student.targetAmount)
            const remaining = student.targetAmount - student.raisedAmount

            return (
              <Card key={student.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={student.profileImageUrl || undefined} />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                        {student.displayName.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg">{student.displayName}</CardTitle>
                      <div className="flex flex-col space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <GraduationCap className="h-4 w-4 mr-1" />
                          {student.major}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {student.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {student.bio}
                  </p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span className="text-green-600 font-medium">
                        {formatCurrency(student.raisedAmount)} raised
                      </span>
                      <span className="text-muted-foreground">
                        {formatCurrency(remaining)} to go
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {student.daysLeft} days left
                    </div>
                    <Badge variant="secondary">{student.school}</Badge>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1" asChild>
                      <Link href={`/students/${student.id}`}>
                        View Profile
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href={`/donate?student=${student.id}`}>
                        Donate
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/students">View All Students</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}