package com.project.itrack.Item;

import com.project.itrack.Category.Category;
import com.project.itrack.Category.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemService {
    private ItemRepository itemRepository;
    private CategoryRepository categoryRepository;

    @Autowired
    public ItemService(ItemRepository itemRepository, CategoryRepository categoryRepository) {
        this.itemRepository = itemRepository;
        this.categoryRepository = categoryRepository;
    }

    public Iterable <Item> getAllItems(Long id){
        return itemRepository.findItemsByItemCategoryId(id);
    }


    public void addItem(Item item, Long id){
        Category itemCategory = categoryRepository.findOne(id);
        item.setItemCategory(itemCategory);
        itemRepository.save(item);
    }

    public void deleteItem(Long id){
        Item item = itemRepository.findOne(id);
        System.out.println(item);
        itemRepository.delete(item);
    }

    public void updateItem(Long categoryId, Long id, Item item){
        Category category = categoryRepository.findOne(categoryId);
        item.setId(id);
        item.setItemCategory(category);
        itemRepository.save(item);

    }

}
