"use client";

import {useId} from "react"

export function Example() {
  let id = useId()
  return <div data-id={id}>My Example</div>
}
