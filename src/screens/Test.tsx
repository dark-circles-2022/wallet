import OnboardingLayout from '../layout/OnboardingLayout';

const Test = () => {
  return (
    <OnboardingLayout
      title="Test"
      subtext="Testing out"
      currentStep={1}
      totalSteps={5}
      isBackButtonVisible
      isStepNumberVisible
      canSkip={false}
    ></OnboardingLayout>
  );
};

export default Test;
