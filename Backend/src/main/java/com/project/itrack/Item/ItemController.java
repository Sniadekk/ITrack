package com.project.itrack.Item;

import com.project.itrack.Category.Category;
import com.project.itrack.Category.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.Path;

@CrossOrigin
@RestController
@RequestMapping(path="/category/{categoryId}/item")
public class ItemController {
    private ItemRepository itemRepository;
    private CategoryRepository categoryRepository;
    private ItemService itemService;


    @Autowired
    ItemController(ItemRepository itemRepository, CategoryRepository categoryRepository, ItemService itemService){
        this.itemRepository = itemRepository;
        this.categoryRepository = categoryRepository;
        this.itemService = itemService;

    }

    @RequestMapping(path="/")
    public Iterable <Item> getAllItems(@PathVariable(value="categoryId") Long id){
         return itemService.getAllItems(id);
    }

    @RequestMapping(path="/", method = RequestMethod.POST)
    public void addItem(@RequestBody Item item, @PathVariable("categoryId") Long id){
        itemService.addItem(item, id);
    }

    @RequestMapping(path="/{itemId}", method = RequestMethod.DELETE)
    public void deleteItem(@PathVariable(value="itemId") Long id){
        System.out.println(id);
        itemService.deleteItem(id);
    }

}
