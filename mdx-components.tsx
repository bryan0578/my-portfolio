import type { MDXComponents } from "mdx/types"
import type { ComponentPropsWithoutRef } from "react"

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

export function useMDXComponents(
  components: MDXComponents
): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-8"
        {...(props as ComponentPropsWithoutRef<"h1">)}
      />
    ),

    h2: (props) => (
      <h2
        className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mt-16 mb-6"
        {...(props as ComponentPropsWithoutRef<"h2">)}
      />
    ),

    h3: (props) => (
      <h3
        className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mt-12 mb-4"
        {...(props as ComponentPropsWithoutRef<"h3">)}
      />
    ),

    h4: (props) => (
      <h4
        className="text-lg md:text-xl font-semibold text-foreground mt-8 mb-3"
        {...(props as ComponentPropsWithoutRef<"h4">)}
      />
    ),

    p: (props) => (
      <p
        className="text-base md:text-lg text-foreground/70 leading-8 mb-6"
        {...(props as ComponentPropsWithoutRef<"p">)}
      />
    ),

    ul: (props) => (
      <ul
        className="mb-6 ml-6 list-disc space-y-3 text-base md:text-lg text-foreground/70 marker:text-[#00FFC2]"
        {...(props as ComponentPropsWithoutRef<"ul">)}
      />
    ),

    ol: (props) => (
      <ol
        className="mb-6 ml-6 list-decimal space-y-3 text-base md:text-lg text-foreground/70 marker:text-[#00FFC2]"
        {...(props as ComponentPropsWithoutRef<"ol">)}
      />
    ),

    li: (props) => (
      <li
        className="leading-8"
        {...(props as ComponentPropsWithoutRef<"li">)}
      />
    ),

    strong: (props) => (
      <strong
        className="font-semibold text-foreground"
        {...(props as ComponentPropsWithoutRef<"strong">)}
      />
    ),

    em: (props) => (
      <em
        className="italic text-foreground/80"
        {...(props as ComponentPropsWithoutRef<"em">)}
      />
    ),

    a: (props) => (
      <a
        className="font-medium text-[#00FFC2] underline underline-offset-4 transition-colors hover:text-[#00FFC2]/80"
        {...(props as ComponentPropsWithoutRef<"a">)}
      />
    ),

    hr: () => (
      <div className="my-12 h-px bg-linear-to-r from-[#00FFC2]/50 via-border to-transparent" />
    ),

    blockquote: (props) => (
      <blockquote
        className="mb-8 border-l-2 border-[#00FFC2]/60 pl-5 text-lg italic text-foreground/80"
        {...(props as ComponentPropsWithoutRef<"blockquote">)}
      />
    ),

    code: (props) => (
      <code
        className="rounded-md border border-border bg-black/30 px-1.5 py-0.5 font-mono text-sm text-[#00FFC2]"
        {...(props as ComponentPropsWithoutRef<"code">)}
      />
    ),

    pre: (props) => (
      <pre
        className="mb-8 overflow-x-auto rounded-2xl border border-border/50 bg-card/50 p-5 text-sm backdrop-blur-sm"
        {...(props as ComponentPropsWithoutRef<"pre">)}
      />
    ),

    table: (props) => (
      <div className="mb-8 overflow-x-auto rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
        <table
          className="w-full border-collapse text-left"
          {...(props as ComponentPropsWithoutRef<"table">)}
        />
      </div>
    ),

    thead: (props) => (
      <thead
        className="border-b border-border/60 bg-white/2"
        {...(props as ComponentPropsWithoutRef<"thead">)}
      />
    ),

    th: (props) => (
      <th
        className="px-4 py-3 text-sm font-semibold text-foreground"
        {...(props as ComponentPropsWithoutRef<"th">)}
      />
    ),

    td: (props) => (
      <td
        className="border-t border-border/40 px-4 py-3 text-sm text-foreground/70"
        {...(props as ComponentPropsWithoutRef<"td">)}
      />
    ),

    ...components,
  }
}