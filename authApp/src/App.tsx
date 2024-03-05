import * as React from 'react';
import { ErrorInfo } from 'react';

interface ErrorState {
	hasError: boolean;
}

interface Props {
	onError: (error: Error, errorInfo?: {[key: string]: any}) => void;
}

export default class Err extends React.Component<Props, ErrorState> {
	constructor(props: any) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		this.props.onError(error, {
			errorInfo: errorInfo.componentStack,
		});
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return <h1>Something went wrong. Please try to reload the page or contact support.</h1>;
		}

		return this.props.children;
	}
}