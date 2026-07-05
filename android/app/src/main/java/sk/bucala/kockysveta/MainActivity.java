package sk.bucala.kockysveta;

import android.os.Bundle;
import android.webkit.WebView;
import com.getcapacitor.BridgeActivity;
import com.capacitorjs.plugins.filesystem.FilesystemPlugin;
import com.capacitorjs.plugins.share.SharePlugin;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(FilesystemPlugin.class);
        registerPlugin(SharePlugin.class);
        super.onCreate(savedInstanceState);
        WindowCompat.setDecorFitsSystemWindows(getWindow(), false);
        WindowInsetsControllerCompat controller = new WindowInsetsControllerCompat(getWindow(), getWindow().getDecorView());
        // Použi AndroidX compat konštanty (nie android.view.WindowInsets.Type /
        // android.view.WindowInsetsController — tie sú z rámca a vyžadujú API 30+;
        // appka má minSdk 22, s raw platform triedami by na starších zariadeniach
        // spadla s NoClassDefFoundError hneď pri štarte).
        controller.hide(WindowInsetsCompat.Type.statusBars());
        controller.setSystemBarsBehavior(WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE);

        WebView webView = getBridge().getWebView();
        webView.setVerticalScrollBarEnabled(false);
        webView.setHorizontalScrollBarEnabled(false);
        webView.setScrollbarFadingEnabled(false);
        webView.setOverScrollMode(WebView.OVER_SCROLL_IF_CONTENT_SCROLLS);
        webView.setVerticalFadingEdgeEnabled(false);
        webView.setHorizontalFadingEdgeEnabled(false);
    }
}
