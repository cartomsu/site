for file in *.jpg; do
    echo "$file"
    npx @squoosh/cli --mozjpeg '{"quality":75,"baseline":false,"arithmetic":false,"progressive":true,"optimize_coding":true,"smoothing":0,"color_space":3,"quant_table":3,"trellis_multipass":false,"trellis_opt_zero":false,"trellis_opt_table":false,"trellis_loops":1,"auto_subsample":true,"chroma_subsample":2,"separate_chroma_quality":false,"chroma_quality":75}' "$file"
done

# for file in *.png; do
#     echo "$file"
#     npx @squoosh/cli --oxipng '{"level":2,"interlace":false}' "$file"
# done

read -p "Press enter to continue"