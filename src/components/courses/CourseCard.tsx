
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CourseCardProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  linkPath?: string;
  linkText?: string;
}

const CourseCard = ({ id, title, children, linkPath, linkText }: CourseCardProps) => {
  return (
    <Card id={id} className="overflow-hidden">
      <CardHeader className="bg-primary/5">
        <CardTitle className="text-2xl text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {children}
        
        {linkPath && linkText && (
          <div className="mt-6 flex justify-center">
            <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#7E69AB]">
              <Link to={linkPath} className="text-white">{linkText}</Link>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CourseCard;
