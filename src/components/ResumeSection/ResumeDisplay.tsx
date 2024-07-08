interface ResumeDisplayProps {
  resume: string;
}

const ResumeDisplay = ({ resume }: ResumeDisplayProps) => {
  return <iframe src={resume} width="100%" height="500px" />;
};

export default ResumeDisplay;
