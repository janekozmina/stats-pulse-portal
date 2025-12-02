import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  title: string;
  description: string;
  link?: string;
  linkLabel?: string;
  icon?: LucideIcon;
}

const InfoCard = ({ title, description, link, linkLabel = "Learn more", icon: Icon }: InfoCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        {Icon && (
          <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10">
            <Icon className="h-6 w-6 text-accent" />
          </div>
        )}
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      {link && (
        <CardContent>
          <Button asChild variant="link" className="px-0">
            <Link to={link}>{linkLabel} →</Link>
          </Button>
        </CardContent>
      )}
    </Card>
  );
};

export default InfoCard;
