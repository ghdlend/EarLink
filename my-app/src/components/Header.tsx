"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navigation = [
  {
    label: "우리가 하는 일",
    href: "/#about",
  },
  {
    label: "이용 안내",
    href: "/#product",
  },
  {
    label: "접근성 가이드",
    href: "/#accessibility",
  },
];

function LinkSymbol() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-10"
    >
      <path
        d="M18.5 5.5H13C8.03 5.5 4 9.53 4 14.5C4 19.47 8.03 23.5 13 23.5H18.5"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M29.5 5.5H35C39.97 5.5 44 9.53 44 14.5C44 19.47 39.97 23.5 35 23.5H29.5"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M16 14.5H32"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-[200] w-full border-b border-[#23483F]/20 bg-[#F3F0E8]/95 font-sans text-[#23483F] backdrop-blur-md">
        <div className="relative mx-auto flex h-[82px] w-full max-w-[1280px] items-center px-5 sm:px-8 lg:px-10">
          {/* 로고 */}
          <Link
            href="/"
            aria-label="이어링크 홈으로 이동"
            className="group flex shrink-0 items-center gap-2.5 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C65A35] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F3F0E8]"
          >
            <span className="transition-transform duration-200 group-hover:-rotate-6">
              <LinkSymbol />
            </span>

            <span className="font-sans text-[21px] font-extrabold tracking-[-0.1em]">
              이어링크
            </span>
          </Link>

          {/* 중앙 메뉴 */}
          <nav
            aria-label="주요 메뉴"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 font-sans md:flex lg:gap-10"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-sm px-1 py-3 text-[14px] font-semibold tracking-[-0.045em] transition-colors duration-200 hover:text-[#C65A35] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C65A35]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 오른쪽 메뉴 버튼 */}
          <div className="ml-auto flex items-center">
            <button
              type="button"
              aria-label={isMenuOpen ? "전체 메뉴 닫기" : "전체 메뉴 열기"}
              aria-expanded={isMenuOpen}
              aria-controls="site-menu"
              onClick={() => setIsMenuOpen((previous) => !previous)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#23483F] text-[#F3F0E8] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#C65A35] hover:text-[#242424] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C65A35] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F3F0E8]"
            >
              {isMenuOpen ? (
                <X size={19} strokeWidth={2} aria-hidden="true" />
              ) : (
                <Menu size={19} strokeWidth={2} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* 전체 메뉴 패널 */}
      <div
        id="site-menu"
        className={`fixed inset-0 z-[300] transition-opacity duration-300 ${
          isMenuOpen
            ? "visible bg-[#242424]/45 opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
        onClick={closeMenu}
      >
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="전체 메뉴"
          onClick={(event) => event.stopPropagation()}
          className={`absolute right-0 top-0 flex h-full w-[min(88vw,420px)] flex-col bg-[#F3F0E8] font-sans text-[#23483F] shadow-[-12px_0_35px_rgba(36,36,36,0.16)] transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-[82px] items-center justify-between border-b border-[#23483F]/20 px-6 sm:px-8">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold tracking-[0.12em]">
                MENU
              </span>

              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#C65A35]"
              />
            </div>

            <button
              type="button"
              aria-label="메뉴 닫기"
              onClick={closeMenu}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#23483F] transition-colors hover:bg-[#23483F] hover:text-[#F3F0E8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C65A35] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F3F0E8]"
            >
              <X size={19} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>

          {/* 로그인 */}
          <section className="border-b border-[#23483F]/20 px-6 py-7 sm:px-8">
            <p className="mb-4 text-xs font-bold tracking-[0.12em] text-[#C65A35]">
              MEMBER
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href="/login"
                onClick={closeMenu}
                className="group flex items-center justify-between border border-[#23483F] bg-[#23483F] px-4 py-3.5 text-sm font-bold !text-[#F3F0E8] opacity-100 transition-colors duration-200 hover:border-[#C65A35] hover:bg-[#C65A35] hover:!text-[#242424] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C65A35]"
              >
                <span className="!text-[#F3F0E8] transition-colors duration-200 group-hover:!text-[#242424]">
                  로그인
                </span>

                <span
                  aria-hidden="true"
                  className="!text-[#F3F0E8] transition-colors duration-200 group-hover:!text-[#242424]"
                >
                  →
                </span>
              </Link>

              <Link
                href="/signup"
                onClick={closeMenu}
                className="group flex items-center justify-between border border-[#23483F] bg-[#F3F0E8] px-4 py-3.5 text-sm font-bold !text-[#23483F] opacity-100 transition-colors duration-200 hover:bg-[#23483F] hover:!text-[#F3F0E8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C65A35]"
              >
                <span className="!text-[#23483F] transition-colors duration-200 group-hover:!text-[#F3F0E8]">
                  회원가입
                </span>

                <span
                  aria-hidden="true"
                  className="!text-[#23483F] transition-colors duration-200 group-hover:!text-[#F3F0E8]"
                >
                  →
                </span>
              </Link>
            </div>
          </section>

          {/* 소개 메뉴 */}
          <nav
            aria-label="전체 페이지 메뉴"
            className="flex flex-col px-6 py-6 sm:px-8"
          >
            <p className="mb-3 text-xs font-bold tracking-[0.12em] text-[#C65A35]">
              EXPLORE
            </p>

            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`group flex items-center justify-between py-4 text-base font-bold tracking-[-0.04em] transition-colors hover:text-[#C65A35] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C65A35] ${
                  index !== navigation.length - 1
                    ? "border-b border-[#23483F]/15"
                    : ""
                }`}
              >
                <span>{item.label}</span>

                <span
                  aria-hidden="true"
                  className="text-lg transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto border-t border-[#23483F]/20 px-6 py-6 sm:px-8">
            <p className="text-xs leading-6 text-[#23483F]/65">
              모두의 일상에 닿는 링크 이어링크와 함께 천천히 만나보세요.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}