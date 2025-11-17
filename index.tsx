import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CyberLayout from "@/components/CyberLayout";
import FileUpload from "@/components/FileUpload";
import { Sparkles, Link as LinkIcon, Zap } from "lucide-react";
import { toast } from "sonner";
import moneyBg1 from "@/assets/money-bg-1.jpg";
import moneyBg2 from "@/assets/money-bg-2.jpg";

const Index = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  const [scanning, setScanning] = useState(false);

  const handleFileSelect = (file: File) => {
    toast.success("Screenshot uploaded successfully");
    localStorage.setItem("uploadedFile", "true");
  };

  const handleScan = (type: "screenshot" | "url") => {
    if (type === "url" && !url) {
      toast.error("Please enter a URL");
      return;
    }

    setScanning(true);
    toast.info("Initiating deep scan...");

    setTimeout(() => {
      navigate("/analysis");
    }, 1500);
  };

  const handleDemoScan = () => {
    localStorage.setItem("demoMode", "true");
    setScanning(true);
    toast.info("Loading demo analysis...");

    setTimeout(() => {
      navigate("/analysis");
    }, 1500);
  };

  return (
    <CyberLayout>
      <div className="container mx-auto px-4 py-12 md:py-20 relative">
        {/* Dark Money Background Images */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-[0.08] z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center mix-blend-luminosity"
            style={{ backgroundImage: `url(${moneyBg1})` }}
          />
          <div 
            className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-60"
            style={{ backgroundImage: `url(${moneyBg2})`, transform: 'translateX(30%)' }}
          />
        </div>
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 relative">
              <span className="text-neon-cyan">ScamShield++</span>
              <div className="absolute inset-0 blur-2xl bg-primary/20" />
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto">
            Detect Fake Finance Apps in{" "}
            <span className="text-neon-pink font-semibold">Seconds</span>
          </p>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <span className="scanning inline-block px-2">
              Analyzing UI patterns, disclaimers, color psychology, and scam fingerprints...
            </span>
          </p>
        </div>

        {/* Main Actions */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Screenshot Upload Card */}
          <div className="glass-strong rounded-2xl p-8 border border-border/50 hover:border-primary hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-500 space-y-6 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Sparkles className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 blur-md bg-primary/50 group-hover:bg-primary/80 transition-all duration-300" />
              </div>
              <h2 className="text-2xl font-bold text-neon-cyan group-hover:text-shadow-lg transition-all duration-300">Screenshot Analysis</h2>
            </div>
            <FileUpload onFileSelect={handleFileSelect} />
            <Button
              onClick={() => handleScan("screenshot")}
              disabled={scanning}
              className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan"
            >
              {scanning ? (
                <span className="flex items-center gap-2">
                  <Zap className="w-5 h-5 animate-pulse" />
                  Scanning...
                </span>
              ) : (
                "Analyze Screenshot"
              )}
            </Button>
          </div>

          {/* URL Scan Card */}
          <div className="glass-strong rounded-2xl p-8 border border-border/50 hover:border-secondary hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(249,115,22,0.3)] transition-all duration-500 space-y-6 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <LinkIcon className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 blur-md bg-secondary/50 group-hover:bg-secondary/80 transition-all duration-300" />
              </div>
              <h2 className="text-2xl font-bold text-neon-purple group-hover:text-shadow-lg transition-all duration-300">URL Deep Scan</h2>
            </div>
            <div className="space-y-4 py-16">
              <label className="text-sm font-medium text-muted-foreground">
                Enter App URL or Website
              </label>
              <Input
                type="url"
                placeholder="https://suspicious-app.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="h-14 bg-muted/20 border-border/50 focus:border-secondary text-lg"
              />
            </div>
            <Button
              onClick={() => handleScan("url")}
              disabled={scanning}
              className="w-full h-14 text-lg font-semibold bg-secondary hover:bg-secondary/90 text-secondary-foreground glow-purple"
            >
              {scanning ? (
                <span className="flex items-center gap-2">
                  <Zap className="w-5 h-5 animate-pulse" />
                  Scanning...
                </span>
              ) : (
                "Scan URL"
              )}
            </Button>
          </div>
        </div>

        {/* Demo Button */}
        <div className="text-center">
          <Button
            onClick={handleDemoScan}
            variant="outline"
            className="h-12 px-8 border-accent/50 hover:border-accent hover:bg-accent/10 text-accent font-semibold"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Try Demo Scan
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-20">
          {[
            {
              icon: "🔍",
              title: "Pixel-Perfect Analysis",
              desc: "AI scans every UI element, color, and pattern",
            },
            {
              icon: "⚡",
              title: "Real-Time Detection",
              desc: "Get results in under 3 seconds",
            },
            {
              icon: "🛡️",
              title: "99.2% Accuracy",
              desc: "Trained on 50K+ scam patterns",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="glass rounded-xl p-6 text-center hover:glass-strong transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </CyberLayout>
  );
};

export default Index;
