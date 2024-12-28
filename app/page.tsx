import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GraduationCap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6" />
            <span className="font-bold text-xl">EduManage</span>
          </div>
          <div className="space-x-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Modern School Management Made Simple
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Streamline your school operations with our comprehensive management system.
              Designed for administrators, teachers, students, and parents.
            </p>
            <div className="space-x-4">
              <Link href="/login">
                <Button size="lg">Start Managing Your School</Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 bg-card rounded-lg shadow-sm">
                  <feature.icon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 EduManage. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    title: 'User Management',
    description: 'Easily manage students, teachers, and staff with role-based access control.',
    icon: GraduationCap,
  },
  {
    title: 'Attendance Tracking',
    description: 'Monitor attendance in real-time with automated reporting and notifications.',
    icon: GraduationCap,
  },
  {
    title: 'Grade Management',
    description: 'Streamline grading with our intuitive gradebook system.',
    icon: GraduationCap,
  },
];