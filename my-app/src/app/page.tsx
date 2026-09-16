import Image from "next/image";

const imagePaths = {
  // 메인 콜라주 이미지
  signHands: "/images/sign-hands.png",
  heroEye: "/images/hero-eye.png",
  touchHands: "/images/touch-hands.png",
  ear: "/images/ear.png",

  // 하단 카드 이미지
  cardEye: "/images/eye.png",
  cardEar: "/images/ear.png",
  cardTouch: "/images/braille-touch.png",

  // 제품 이미지
  product: "/images/earlink-product-clean.png",
};

const featureCards = [
  {
    title: "보고",
    description: "텍스트, 이미지, 영상 등 다양한 정보를 함께 볼 수 있어요.",
    image: imagePaths.cardEye,
    alt: "눈을 표현한 흑백 이미지",
  },
  {
    title: "듣고",
    description: "음성, 수어, 자막으로 원하는 방식으로 들을 수 있어요.",
    image: imagePaths.cardEar,
    alt: "귀와 손을 표현한 흑백 이미지",
  },
  {
    title: "느끼는",
    description: "다양한 감각을 존중하는 콘텐츠로 더 풍부한 경험을 만들어요.",
    image: imagePaths.cardTouch,
    alt: "손끝으로 점자를 읽는 흑백 이미지",
  },
];

const usageSteps = [
  {
    number: "01",
    title: "QR코드를 찍어요",
    description:
      "스마트폰으로 EARLINK의 QR코드를 스캔해 웹앱과 빠르게 연결합니다.",
  },
  {
    number: "02",
    title: "서로의 정보를 연결해요",
    description:
      "청각, 시각 등 서로 다른 방식의 정보를 웹앱을 통해 실시간으로 주고받습니다.",
  },
  {
    number: "03",
    title: "나에게 맞는 방식으로 확인해요",
    description:
      "수어는 AI가 인식해 텍스트로 전달하고, 필요한 정보는 점자로 출력해 확인할 수 있습니다.",
  },
];

function BrushStroke({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute block h-8 w-32 -rotate-[20deg] bg-[#23483F] ${className}`}
    />
  );
}

function DotPattern({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`grid grid-cols-7 gap-1 opacity-50 ${className}`}
    >
      {Array.from({ length: 42 }).map((_, index) => (
        <span
          key={index}
          className="h-1.5 w-1.5 rounded-full bg-[#23483F]"
        />
      ))}
    </div>
  );
}

function HeroCollage() {
  return (
    <div className="relative aspect-[1.08/0.92] w-full max-w-[460px]">
      {/* 청록색 원형 그래픽 */}
      <div
        aria-hidden="true"
        className="absolute left-[43%] top-[3%] h-24 w-24 rounded-full bg-[#287F88] sm:h-32 sm:w-32"
      />

      {/* 왼쪽 위: 손동작 */}
      <div className="absolute left-[4%] top-[10%] z-20 h-[31%] w-[45%] overflow-hidden bg-[#D8D5CC] shadow-[6px_6px_0_#23483F]">
        <Image
          src={imagePaths.signHands}
          alt="손으로 소통하는 모습"
          fill
          priority
          className="object-cover grayscale"
          sizes="(max-width: 1024px) 80vw, 240px"
        />
      </div>

      {/* 중앙 위: 메인 콜라주용 눈 */}
      <div className="absolute left-[48%] top-[17%] z-30 h-[28%] w-[43%] overflow-hidden bg-[#EEECE4] shadow-[6px_6px_0_#23483F]">
        <Image
          src={imagePaths.heroEye}
          alt="눈을 표현한 흑백 이미지"
          fill
          priority
          className="object-cover grayscale"
          sizes="(max-width: 1024px) 65vw, 230px"
        />
      </div>

      {/* 왼쪽 아래: 촉각으로 소통하는 손 */}
      <div className="absolute bottom-[10%] left-[8%] z-40 h-[39%] w-[58%] overflow-hidden bg-[#555954] shadow-[7px_7px_0_#287F88]">
        <Image
          src={imagePaths.touchHands}
          alt="손으로 촉각을 통해 소통하는 모습"
          fill
          priority
          className="object-cover grayscale"
          sizes="(max-width: 1024px) 85vw, 320px"
        />
      </div>

      {/* 오른쪽 아래: 귀 */}
      <div className="absolute bottom-[5%] right-[4%] z-50 h-[39%] w-[38%] overflow-hidden bg-[#555954] shadow-[6px_6px_0_#23483F]">
        <Image
          src={imagePaths.ear}
          alt="귀와 손을 표현한 흑백 이미지"
          fill
          priority
          className="object-cover grayscale"
          sizes="(max-width: 1024px) 55vw, 190px"
        />
      </div>

      {/* 상단 왼쪽 붓터치 */}
      <BrushStroke className="-left-3 top-0 z-[60] scale-90" />

      {/* 하단 오른쪽 붓터치 */}
      <BrushStroke className="-bottom-3 right-0 z-[60] rotate-[25deg] scale-90" />

      {/* 하단 왼쪽 점 패턴 */}
      <DotPattern className="absolute bottom-[6%] left-0 z-[70] scale-90" />
    </div>
  );
}

function FeatureCard({
  title,
  description,
  image,
  alt,
}: {
  title: string;
  description: string;
  image: string;
  alt: string;
}) {
  return (
    <article className="grid grid-cols-[76px_1fr] gap-3 border-r border-[#23483F]/20 pr-4 last:border-r-0 last:pr-0 sm:grid-cols-[90px_1fr] sm:gap-4 lg:grid-cols-[78px_1fr] xl:grid-cols-[92px_1fr]">
      <div className="relative aspect-square overflow-hidden bg-[#D8D5CC]">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover grayscale"
          sizes="92px"
        />
      </div>

      <div className="flex min-w-0 flex-col justify-center">
        <h2 className="relative inline-block w-fit font-display text-2xl leading-none tracking-[-0.07em] text-[#23483F] sm:text-3xl lg:text-[2rem]">
          {title}

          <span
              aria-hidden="true"
              className="absolute -bottom-2 left-0 h-1.5 w-full -rotate-2 bg-[#287F88]"
          />
                
        </h2>

        <p className="mt-2 text-[11px] leading-5 text-[#23483F]/75 sm:text-xs sm:leading-6">
          {description}
        </p>
      </div>
    </article>
  );
}

function UsageStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <article className="border-l border-[#23483F]/25 pl-5">
      <span className="text-xs font-bold tracking-[0.16em] text-[#287F88]">
        {number}
      </span>

      <h3 className="mt-2 font-display text-2xl leading-none tracking-[-0.06em] text-[#23483F] sm:text-3xl">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#23483F]/70">
        {description}
      </p>
    </article>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F3F0E8] text-[#23483F]">
      {/* ==================================================
          첫 화면
          콜라주 + 메인 문구 + 보고 / 듣고 / 느끼는
      ================================================== */}
      <section
        id="about"
        className="scroll-mt-[82px] px-6 py-8 sm:px-10 sm:py-10 lg:h-[calc(100svh-82px)] lg:min-h-[620px] lg:overflow-hidden lg:px-16 lg:py-5"
      >
        <div className="mx-auto flex h-full max-w-[1280px] flex-col">
          {/* 상단: 콜라주 + 메인 문구 */}
          <div className="grid items-center gap-8 lg:min-h-0 lg:flex-1 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
            <div className="flex justify-center lg:justify-start">
              <HeroCollage />
            </div>

            <div className="relative z-10 lg:pl-1">
              <p className="mb-3 text-[11px] font-bold tracking-[0.24em] text-[#287F88] sm:text-xs">
                EARLINK
              </p>

              <h1 className="max-w-[570px] font-display text-[clamp(2.7rem,5.4vw,5.7rem)] leading-[1.04] tracking-[-0.08em] text-[#23483F]">
                서로 다른 감각이,
                <br />
                하나의{" "}
                <span className="relative inline-block text-[#287F88]">
                  연결
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-2 left-0 h-1.5 w-full -rotate-2 bg-[#287F88]"
                  />
                </span>
                로
              </h1>

              <p className="mt-5 max-w-[430px] text-xs leading-6 text-[#23483F]/80 sm:text-sm sm:leading-7">
                EARLINK는 누구나 자신의 속도로 정보를 찾고, 서로를 연결할 수
                있는 접근성 플랫폼입니다.
              </p>
            </div>
          </div>

          {/* 하단: 보고 / 듣고 / 느끼는 */}
          <div
            id="guide"
            className="mt-5 shrink-0 border-t border-[#23483F]/20 pt-4 lg:mt-3 lg:pt-4"
          >
            <div className="grid gap-5 lg:grid-cols-3 lg:gap-0">
              {featureCards.map((card) => (
                <FeatureCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  alt={card.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          제품 소개 + 이용 방법
          한 화면 안에서 제품 이미지와 01 / 02 / 03 표시
      ================================================== */}
      <section
        id="product"
        className="scroll-mt-[82px] bg-[#E8E4D9] px-6 py-10 sm:px-10 sm:py-12 lg:h-[calc(100svh-82px)] lg:min-h-[620px] lg:px-16 lg:py-8"
      >
        <div className="mx-auto flex h-full max-w-[1280px] flex-col">
          <div className="grid h-full min-h-0 items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            {/* 제품 이미지 */}
            <div className="relative flex h-full min-h-[320px] items-center justify-center">
              <div className="relative aspect-[1.5/1] w-full max-w-[680px] overflow-hidden bg-[#D8D5CC] shadow-[10px_10px_0_#287F88]">
                <Image
                  src={imagePaths.product}
                  alt="EARLINK 제품의 모습"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />

                <div className="pointer-events-none absolute inset-0 border border-[#23483F]/20" />

                <p className="absolute bottom-4 left-4 bg-[#23483F] px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-[#F3F0E8]">
                  EARLINK DEVICE
                </p>
              </div>
            </div>

            {/* 사용 방법 */}
            <div className="flex h-full min-h-0 flex-col justify-center">
              <div className="mb-7">
                <p className="text-xs font-bold tracking-[0.2em] text-[#287F88] sm:text-sm">
                  EARLINK GUIDE
                </p>

                <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-[-0.08em] text-[#23483F] sm:text-5xl lg:text-6xl">
                  이렇게 사용해요
                </h2>
              </div>

              <div className="grid gap-5 sm:gap-6">
                {usageSteps.map((step) => (
                  <UsageStep
                    key={step.number}
                    number={step.number}
                    title={step.title}
                    description={step.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          접근성 가이드
      ================================================== */}
      <section
        id="accessibility"
        className="scroll-mt-[82px] flex min-h-[calc(100svh-82px)] items-center px-6 py-16 sm:px-10 sm:py-20 lg:px-16"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
          <div>
            <p className="mb-5 text-xs font-bold tracking-[0.2em] text-[#287F88] sm:text-sm">
              ACCESSIBILITY GUIDE
            </p>

            <h2 className="font-display text-5xl leading-[1.05] tracking-[-0.08em] text-[#23483F] sm:text-7xl">
              나에게 맞는 방식으로
            </h2>

            <p className="mt-8 max-w-md leading-8 text-[#23483F]/70">
              EARLINK는 시각, 청각, 촉각 등 다양한 사용 환경을 고려해 정보를
              전달합니다.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-[#23483F]/25 p-6">
              <p className="text-3xl font-black">Aa</p>

              <h3 className="mt-5 text-xl font-bold">읽기 편한 글자</h3>

              <p className="mt-3 text-sm leading-7 text-[#23483F]/70">
                정보의 크기와 대비를 조절해 내용을 편하게 확인할 수 있어요.
              </p>
            </div>

            <div className="border border-[#23483F]/25 p-6">
              <p className="text-3xl font-black">◐</p>

              <h3 className="mt-5 text-xl font-bold">명확한 대비</h3>

              <p className="mt-3 text-sm leading-7 text-[#23483F]/70">
                배경과 콘텐츠가 분명하게 구분되도록 설계합니다.
              </p>
            </div>

            <div className="border border-[#23483F]/25 p-6">
              <p className="text-3xl font-black">♪</p>

              <h3 className="mt-5 text-xl font-bold">다양한 전달 방식</h3>

              <p className="mt-3 text-sm leading-7 text-[#23483F]/70">
                음성, 수어, 자막과 촉각 정보를 함께 고려합니다.
              </p>
            </div>

            <div className="border border-[#23483F]/25 p-6">
              <p className="text-3xl font-black">↗</p>

              <h3 className="mt-5 text-xl font-bold">사용자 속도</h3>

              <p className="mt-3 text-sm leading-7 text-[#23483F]/70">
                서두르지 않고 필요한 만큼 천천히 사용할 수 있어요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          마지막 문구
      ================================================== */}
      <section
        className="flex min-h-[calc(100svh-82px)] flex-col bg-[#E8E4D9] px-6 pt-12 sm:px-10 sm:pt-16 lg:px-16"
      >
        <div className="flex flex-1 items-center justify-center text-center">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#287F88]">
              EARLINK
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl font-display text-5xl leading-[1.05] tracking-[-0.08em] text-[#23483F] sm:text-6xl lg:text-7xl">
              연결은 하나의{" "}
              <span className="text-[#287F88]">모양이 아니니까</span>
            </h2>

            <p className="mx-auto mt-6 max-w-lg leading-7 text-[#23483F]/70 sm:leading-8">
              시각, 청각, 촉각, 그리고 그 사이의 모든 감각까지.
              EARLINK는 모두의 방식이 연결될 수 있도록 함께합니다.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-[#23483F]/20 bg-[#1D3731] -mx-6 px-6 py-6 text-[#F3F0E8] sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="font-bold tracking-[-0.04em]">EARLINK</p>

            <p className="text-[#F3F0E8]/60">
              서로 다른 감각이, 하나의 연결로
            </p>
          </div>
        </footer>
      </section>
    </main>
  );
}