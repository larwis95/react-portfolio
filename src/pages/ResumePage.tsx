import AnimatedLayout from "../utils/page-transitions/AnimatedLayout";
import DownloadButton from "../components/ResumeSection/DownloadButton";
import ResumeDisplay from "../components/ResumeSection/ResumeDisplay";
import Resume from "../assets/ComputerScienceResumedocx.pdf";

const ResumePage = () => {
  return (
    <AnimatedLayout>
      <div className="mt-24 flex h-full w-1/2 flex-col items-center justify-center gap-4">
        <h1 className="mb-2 text-2xl font-bold">Resume</h1>
        <ResumeDisplay resume={Resume} />
        <DownloadButton resumeLink={Resume} />
      </div>
    </AnimatedLayout>
  );
};

export default ResumePage;
