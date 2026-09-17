import React from 'react';
import { Clock, Sun, Flame, Coffee, BookOpen, Utensils, Wrench, Activity, Heart, BookMarked, Moon } from 'lucide-react';
import { DailyRoutine } from '@/lib/types';
import Container from '../shared/Container';
import SectionHeading from '../shared/SectionHeading';

interface DailyRoutineSectionProps {
  routines: DailyRoutine[];
}

export default function DailyRoutineSection({ routines }: DailyRoutineProps) {
  const iconMap: Record<string, React.ReactNode> = {
    Sun: <Sun className="w-4 h-4 text-saffron" />,
    Flame: <Flame className="w-4 h-4 text-saffron" />,
    Coffee: <Coffee className="w-4 h-4 text-saffron" />,
    BookOpen: <BookOpen className="w-4 h-4 text-saffron" />,
    Utensils: <Utensils className="w-4 h-4 text-saffron" />,
    Wrench: <Wrench className="w-4 h-4 text-saffron" />,
    Activity: <Activity className="w-4 h-4 text-saffron" />,
    Heart: <Heart className="w-4 h-4 text-saffron" />,
    BookMarked: <BookMarked className="w-4 h-4 text-saffron" />,
    Moon: <Moon className="w-4 h-4 text-saffron" />,
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <Container>
        <SectionHeading
          badge="Disciplined Lifestyle"
          title="A Day at Bal Sadan"
          subtitle="From 6:00 AM dawn yoga to evening self-study, our daily schedule balances intellect, spiritual discipline, and joyful play."
        />

        {/* Responsive Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {routines.map((routine, idx) => (
            <div
              key={routine.id || idx}
              className="relative p-5 rounded-2xl bg-cream-50/60 border border-beige-200/80 hover:border-gold-400 hover:shadow-card transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-beige-200 text-maroon font-serif font-bold text-xs shadow-2xs">
                    <Clock className="w-3 h-3 text-saffron" />
                    <span>{routine.time}</span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white border border-gold-200 flex items-center justify-center">
                    {iconMap[routine.icon] || <Clock className="w-3.5 h-3.5 text-saffron" />}
                  </div>
                </div>

                <h4 className="font-serif font-bold text-sm text-charcoal-900 leading-snug">
                  {routine.title}
                </h4>

                {routine.description && (
                  <p className="text-xs text-charcoal-600 mt-1.5 leading-relaxed">
                    {routine.description}
                  </p>
                )}
              </div>

              <div className="mt-4 pt-2 border-t border-beige-200/50 flex items-center justify-between text-[10px] text-charcoal-500">
                <span>Step {idx + 1}</span>
                <span className="font-devanagari text-gold-700">दिनचर्या</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

type DailyRoutineProps = DailyRoutineSectionProps;
