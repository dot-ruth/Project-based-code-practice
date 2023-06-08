<?php $attributes ??= new \Illuminate\View\ComponentAttributeBag; ?>
<?php foreach($attributes->onlyProps(['tag_list']) as $__key => $__value) {
    $$__key = $$__key ?? $__value;
} ?>
<?php $attributes = $attributes->exceptProps(['tag_list']); ?>
<?php foreach (array_filter((['tag_list']), 'is_string', ARRAY_FILTER_USE_KEY) as $__key => $__value) {
    $$__key = $$__key ?? $__value;
} ?>
<?php $__defined_vars = get_defined_vars(); ?>
<?php foreach ($attributes as $__key => $__value) {
    if (array_key_exists($__key, $__defined_vars)) unset($$__key);
} ?>
<?php unset($__defined_vars); ?>

<?php
    $tags = explode(',',$tag_list)
?>
<ul class="flex">
    <?php $__currentLoopData = $tags; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $tag): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <li
    class="bg-black text-white rounded-xl px-3 py-1 mr-2"
>
    <a href="/?tag=<?php echo e($tag); ?>"><?php echo e($tag); ?></a>
</li>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    
    
</ul><?php /**PATH C:\Users\ruth\Documents\Project-based-code-practice\Laravel Crash Course\laragigs\resources\views/components/listing-tag.blade.php ENDPATH**/ ?>