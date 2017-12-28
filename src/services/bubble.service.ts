declare var com:any;
const FloatingViewManager = com.github.recruitLifestyle.FloatingViewManager;
@JavaProxy("com.somepackage.BubbleService")
export class BubbleService extends android.app.IntentService {
    
    static constructorCalled: boolean = false;
    private floatingViewManager;

    public onHandleIntent(intent:android.content.Intent):number{
        console.log("Service started");
        if(this.floatingViewManager != null){

            return android.app.Service.START_STICKY;;
        }
        var context = app.android.context;

        let metrics = new android.util.DisplayMetrics();
        let windowManager = <android.view.WindowManager>this.getSystemService(android.app.ContextImpl.WINDOW_SERVICE);
        windowManager.getDefaultDisplay().getMetrics(metrics);

        let inflater = android.view.LayoutInflater.from(this);
        let iconView = <android.widget.ImageView>inflater.inflate(context.getResources().getIdentifier("widget_chathead", "layout", context.getPackageName()), null, false);

        let viewOnClickListener = new android.view.View.OnClickListener({
            onClick:(view:android.view.View) => {
                console.log("Clicked");
            }
        });
        iconView.setOnClickListener(viewOnClickListener);
        
        this.floatingViewManager = new FloatingViewManager(this, this);
        return 0;
    }
}