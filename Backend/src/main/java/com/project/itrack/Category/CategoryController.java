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
    private final CategoryRepository categoryRepository;


    @Autowired
    CategoryController(CategoryRepository categoryRepository){
    this.categoryRepository = categoryRepository;
    }

    @RequestMapping(path="/", method = RequestMethod.POST)
    public void addCategory(@RequestBody Category category){
        categoryRepository.save(category);
    }

    @RequestMapping(path="/", method = RequestMethod.GET)
    public  Iterable<Category> getAllCategories(){
        return categoryRepository.findAll();
    }

    @RequestMapping(path="/{categoryId}")
    public Category getCategoryById(@PathVariable(value = "categoryId") Long id ){
        return categoryRepository.getCategoriesById(id);
    }


}
