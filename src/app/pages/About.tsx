import AnimatedText from "../components/text/AnimatedText";

export default function About() {
  return (
    <div className="min-h-screen flex  px-4">
      <div className="w-full max-w-2xl">
        <AnimatedText
          lines={[
            "Built by designers who’ve lived",
            "the startup grind and know how",
            "to move with it."
          ]}
        />
      </div>
    </div>
  );
}