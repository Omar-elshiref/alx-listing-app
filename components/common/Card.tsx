export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`bg-white dark:bg-[#1a1a1a] rounded-lg p-8 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;