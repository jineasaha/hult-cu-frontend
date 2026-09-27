export function AboutMotion() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          @keyframes aboutFadeUp {
            from {
              opacity: 0;
              transform: translateY(24px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes aboutFadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes aboutFloat {
            0%, 100% {
              transform: translate3d(0, 0, 0);
            }
            50% {
              transform: translate3d(0, -10px, 0);
            }
          }

          @keyframes aboutPulse {
            0%, 100% {
              opacity: .35;
              transform: scale(1);
            }
            50% {
              opacity: .65;
              transform: scale(1.04);
            }
          }

          .about-fade-up {
            animation: aboutFadeUp .8s cubic-bezier(.22, 1, .36, 1) both;
          }

          .about-fade-up-delay-1 {
            animation: aboutFadeUp .8s .1s cubic-bezier(.22, 1, .36, 1) both;
          }

          .about-fade-up-delay-2 {
            animation: aboutFadeUp .8s .2s cubic-bezier(.22, 1, .36, 1) both;
          }

          .about-fade-up-delay-3 {
            animation: aboutFadeUp .8s .3s cubic-bezier(.22, 1, .36, 1) both;
          }

          .about-fade-up-delay-4 {
            animation: aboutFadeUp .8s .4s cubic-bezier(.22, 1, .36, 1) both;
          }

          .about-fade-in {
            animation: aboutFadeIn 1s ease both;
          }

          .about-float {
            animation: aboutFloat 6s ease-in-out infinite;
          }

          .about-pulse {
            animation: aboutPulse 5s ease-in-out infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .about-fade-up,
            .about-fade-up-delay-1,
            .about-fade-up-delay-2,
            .about-fade-up-delay-3,
            .about-fade-up-delay-4,
            .about-fade-in,
            .about-float,
            .about-pulse {
              animation: none !important;
            }

            html {
              scroll-behavior: auto !important;
            }
          }
        `,
      }}
    />
  );
}