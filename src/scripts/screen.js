import { initialWindowMetrics } from "react-native-safe-area-context"

const screen = {
    top: initialWindowMetrics.insets.top,
    bottom: initialWindowMetrics.insets.bottom,
    width: initialWindowMetrics.frame.width,
    height: initialWindowMetrics.frame.height,
    safeGameHeight: initialWindowMetrics.frame.height - initialWindowMetrics.insets.bottom - 150
}

export default screen