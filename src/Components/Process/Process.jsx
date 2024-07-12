import "./Process.css";

function Process() {
  const stepsAndStandards = [
    "Simplicity, honesty, and transparency in listings, to be clear what positions are actually want and offer",
    "Pay-What-You-Want for all job searchers",
    "Applications accepted in rounds, to keep recruiters from being overwhelmed and applicants falling through the cracks",
    "Higher standards for job postings: the job exists, is actively looking, and ready to hire",
    "2-3 Non-negotiable parameters required for submitting applications - this is used to limit time wasted sorting through ones that don’t meet minimum requirements.",
    "Tracking of applications to let applicants know the status of their application, how many people’s applications are being processed, and where they are in line - to offer realistic expectations for applicants and accountability for businesses.",
    "Accountability for recruiters through requiring a response to each application.",
    "Focus on facilitating interviews right away for faster job placement and more human connection in the process.",
  ];

  return (
    <div className="process">
      <h1 className="process__title">our process:</h1>
      <div className="process__details">
        <p className="process__detail process__detail-1">
          <span className="process__detail-title">1. REFRAME:</span>
          People deserve to be treated with decency and respect. Their talent,
          effort, and personality need to be taken into consideration when it
          comes to this very normal, should-be-simple process of working
          together towards a mutually-beneficial common goal. Jobs are simply
          people helping each other.
        </p>
        <p className="process__detail process__detail-2">
          <span className="process__detail-title">2. RECONSIDER:</span>
          If a system is made to help people and it ends up not being helpful,
          it can be changed. The way things are doesn’t have to stay stagnant
          and painful. We can change anything that doesn’t work for us - all we
          have to do is be creative enough to see how it should be and implement
          that change. Curiosity and imagination are key.
        </p>
        <p className="process__detail process__detail-3">
          <span className="process__detail-title">3. REWORK:</span>
          We can make things far better if we simply respect each other with our
          expectations and communication.
          <span>
            We can make rules to help hold us accountable to those expectations
            so that there is equality and fairness build into the system.
          </span>
        </p>
      </div>
      <h1 className="ss__title">our steps & standards:</h1>
      <div className="ss__details">
        {stepsAndStandards.map((step) => {
          return (
            <p key={step} className="ss__detail">
              {step}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Process;
