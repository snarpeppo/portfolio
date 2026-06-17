"use client";

import { Component, ErrorInfo, ReactNode } from "react";
import { StlPlaceholder } from "./StlPlaceholder";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: () => void;
}

interface State {
  hasError: boolean;
}

export class StlErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("STL loading error:", error, errorInfo);
    this.props.onError?.();
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <StlPlaceholder />;
    }
    return this.props.children;
  }
}
