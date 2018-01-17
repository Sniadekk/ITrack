package com.project.itrack.Category;

import org.springframework.stereotype.Service;

@Service
public class CategoryService {
    private CategoryRepository categoryRepository;

    CategoryService(CategoryRepository categoryRepository){
        this.categoryRepository = categoryRepository;
    }

    public Category getCategoryById(Long id){
        return categoryRepository.getCategoriesById(id);
    }
    public void addCategory(Category category){
        categoryRepository.save(category);
    }
    public void deleteCategory(Long id){
        Category category = categoryRepository.findOne(id);
        categoryRepository.delete(category);
    }
    public Iterable<Category> getAllCategories(){
        return categoryRepository.findAll();
    }
}
