## "Red Zuurdesem website" 


### Image optimizations

https://developers.google.com/speed/docs/insights/OptimizeImages

> find . -name "*.jpg" -exec convert {} -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG -colorspace sRGB {} \;

