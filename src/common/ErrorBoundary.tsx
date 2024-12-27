import { Component, ReactNode } from 'react';
import ErrorPage from '../page/ErrorPage';
import LoginPage from '../page/LoginPage';

interface ErrorBoundaryProps {
  children: ReactNode;
  onReset: () => void;
}
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    // 오류여부와 오류를 state 상태로 저장
    this.state = {
      hasError: false,
      error: null,
    };

    // 이벤트 핸들러에서 호출할 함수 바인딩 처리
    this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
  }

  // 오류 발생시
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // 오류 상태 업데이트.
    return {
      hasError: true,
      error,
    };
  }

  resetErrorBoundary(): void {
    // 오류난 함수를 재요청
    const { onReset } = this.props;
    onReset();
    // 에러 상태를 기본으로 초기화
    this.setState({
      hasError: false,
      error: null,
    });
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    // 에러일 경우 fallback 컴포넌트 리턴
    if (hasError && error) {
      const status = parseInt(
        error.message.split(' ')[error.message.split(' ').length - 1]
      );

      return status === 401 ? (
        <LoginPage />
      ) : (
        <ErrorPage handleErrorReset={this.resetErrorBoundary} />
      );
    }
    return children;
  }
}

export default ErrorBoundary;
