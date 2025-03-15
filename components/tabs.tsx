"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Tabs = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { defaultValue?: string }>(
  ({ className, defaultValue, ...props }, ref) => {
    const [activeTab] = React.useState(defaultValue)

    return <div ref={ref} className={cn("w-full", className)} {...props} data-active-tab={activeTab} />
  },
)
Tabs.displayName = "Tabs"

const TabsList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-zinc-100 p-1 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400",
        className,
      )}
      {...props}
    />
  ),
)
TabsList.displayName = "TabsList"

const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }
>(({ className, value, ...props }, ref) => {
  const tabsEl = React.useContext(TabsContext)
  const isActive = tabsEl?.getAttribute("data-active-tab") === value

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (tabsEl) {
      tabsEl.setAttribute("data-active-tab", value)
      // Find the Tabs component and update its state
      const childrenArray = Array.from(tabsEl.parentElement?.children || []); // Converte HTMLCollection para um array

      const tabsComponent = childrenArray.find(
        (child) => React.isValidElement(child) && child.type === Tabs
      ) as React.ReactElement | undefined; // Define como `undefined` se não for encontrado

      if (tabsComponent && "props" in tabsComponent) {
        const componentWithProps = tabsComponent as React.ReactElement<{ onChange?: (value: string) => void }>;
        componentWithProps.props.onChange?.(value); // Chama `onChange` se estiver definido
      }
    }

    if (props.onClick) {
      props.onClick(e)
    }
  }

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-zinc-950 data-[state=active]:shadow-sm dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-800 dark:data-[state=active]:bg-zinc-950 dark:data-[state=active]:text-zinc-50",
        isActive && "bg-white text-zinc-950 shadow-sm dark:bg-zinc-950 dark:text-zinc-50",
        className,
      )}
      data-state={isActive ? "active" : "inactive"}
      value={value}
      onClick={handleClick}
      {...props}
    />
  )
})
TabsTrigger.displayName = "TabsTrigger"

const TabsContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { value: string }>(
  ({ className, value, ...props }, ref) => {
    const tabsEl = React.useContext(TabsContext)
    const isActive = tabsEl?.getAttribute("data-active-tab") === value

    if (!isActive) return null

    return (
      <div
        ref={ref}
        className={cn(
          "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-800",
          className,
        )}
        data-state={isActive ? "active" : "inactive"}
        {...props}
      />
    )
  },
)
TabsContent.displayName = "TabsContent"

const TabsContext = React.createContext<HTMLDivElement | null>(null)

export { Tabs, TabsList, TabsTrigger, TabsContent }

