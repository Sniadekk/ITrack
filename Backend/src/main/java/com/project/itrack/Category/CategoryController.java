package com.project.itrack.Category;

import com.project.itrack.Item.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path="/category")
public class CategoryController {
    private final CategoryRepository categoryRespository;


    @Autowired
    private CategoryService categoryService;

    @Autowired
    CategoryController(CategoryRepository categoryRepository ){
        this.categoryRespository = categoryRepository;
    }

    @RequestMapping(path="/", method = RequestMethod.POST)
    public void addCategory(@RequestBody Category category){
        categoryService.addCategory(category);
    }

    @RequestMapping(path="/{categoryId}", method = RequestMethod.DELETE)
    public void deleteCategory(@PathVariable(value = "categoryId") Long id ){
        categoryService.deleteCategory(id);
    }

    @RequestMapping(path="/", method = RequestMethod.GET)
    public  Iterable<Category> getAllCategories(){
        return categoryService.getAllCategories();
    }

    @RequestMapping(path="/{categoryId}")
    public Category getCategoryById(@PathVariable(value = "categoryId") Long id ){
        return categoryService.getCategoryById(id);
    }


}
