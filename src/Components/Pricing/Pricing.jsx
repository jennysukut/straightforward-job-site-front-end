import "./Pricing.css";

function Pricing() {
  return (
    <div className="pricing">
      <h1 className="pricing__title">pricing:</h1>
      <div className="pricing__details">
        <p className="pricing__detail pricing__detail-1">
          <span className="pricing__detail-title">FOR INDIVIDUALS:</span>
          <span className="highlighted-text">
            Our pricing model for individuals is pay-what-you-want!{" "}
          </span>
          When you sign up, you get to choose any amount between $0 - $50 to
          have as a recurring monthly payment. All the features and
          functionality will be available to every user, no matter the amount of
          their subscription. If you choose $0, we don’t take any payment
          information, because it’s unnecessary. If you want to help support our
          platform and pay a bit monthly, we are very thankful for your support!
          <span className="italic-text">
            Your subscription amount can be changed at any time in your
            settings.
          </span>
        </p>
        <p className="pricing__detail pricing__detail-2">
          <span className="pricing__detail-title">FOR BUSINESSES:</span>
          <span className="highlighted-text">
            Businesses have a simple, affordable, + straightforward amount of
            $100 per job listing per month!{" "}
          </span>
          The amount of $100 will be charged each month the listing is active so
          long as the business is active in the stages of the hiring process by
          viewing applications, responding to messages, and progressing with
          interviews.
          <span>
            If, however, a business has gotten more than 25 applications and is
            not reviewing, responding, or moving on to next steps, the job
            listing will be renewed at $150 the next month, continuing at the
            price of $150 until the listing is attended to or closed.
          </span>
        </p>
        <p className="pricing__detail pricing__detail-3">
          our focus is to making the job search approachable for people, despite
          their financial situations while simplifying the process for
          businesses, utilizing responsiveness, clear communication, and
          structure to facilitate quick job placements that benefit everyone
          involved.
        </p>
      </div>
      <div className="pricing__page-buttons">
        <button className="pricing__button pricing__sign-me-up-button">
          sign me up!
        </button>
        <button className="pricing__button pricing__see-our-process">
          see our process
        </button>
      </div>
    </div>
  );
}

export default Pricing;
